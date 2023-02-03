import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bara-pesquisa',
  templateUrl: './bara-pesquisa.component.html',
  styleUrls: ['./bara-pesquisa.component.css']
})
export class BaraPesquisaComponent implements OnInit {
  descricao = "";
  constructor(
    private router: Router
  ) { }
  
  ngOnInit(): void {
  }
  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"],{queryParams:{ descricao: this.descricao}});
      return;

    }
     this.router.navigate(["produtos"]);

  }

}
