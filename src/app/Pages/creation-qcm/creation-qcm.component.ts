import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QcmService} from "../../Services/qcm.service";
import {QuestionService} from "../../Services/question.service";
import {QCM} from "../../Modeles/QCM";

@Component({
  selector: 'app-creation-qcm',
  templateUrl: './creation-qcm.component.html',
  styleUrls: ['./creation-qcm.component.scss']
})
export class CreationQCMComponent implements OnInit,AfterViewInit {
  name : string = "bam";
  isNotSaved: boolean = true;
  qcmLocal: QCM|undefined;
  qcmBd: QCM|undefined;
  constructor(public route:ActivatedRoute,private questionService: QuestionService, private qcmService: QcmService, public router:Router) { }

  ngOnInit(): void {
    this.name = <string>this.route.snapshot.paramMap.get('name');
    this.questionService.QCMActuel.subscribe(res =>{
      this.qcmLocal = res;
      this.questionService.isNotSaved.subscribe(res => {
        this.isNotSaved = res
      });
    });

  }

  checkSave() {
    console.log(this.qcmLocal);
    if(this.qcmLocal?.id){
      this.qcmService.modifyQCM(this.qcmLocal);
    }
    else{
      if(this.qcmLocal)
        this.qcmLocal.titre = this.name;
      this.qcmService.createNewQCM(this.qcmLocal!).subscribe(res => {
        this.questionService.reloadQCM(res);
        this.qcmLocal = res;
      });
    }
  }

  deleteQcm() {
    console.log(this.qcmLocal);
    if(this.qcmLocal?.id){
      console.log("ça passe");
      this.qcmService.deleteQCM(this.qcmLocal.id).subscribe(res=>console.log(res));
    }
    this.router.navigate(["/"]);

  }

  ngAfterViewInit(): void {
    if(this.qcmLocal?.id){
      this.isNotSaved = false;
    }
  }
}
