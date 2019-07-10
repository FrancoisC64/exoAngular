import { Component, OnInit } from '@angular/core';
import { ActuService } from '../../services/actu.service';
import { Actu } from '../../modele/actu';
import { ActivatedRoute,Router } from '@angular/router';
import { IdentService } from '../../services/ident.service';
@Component({
  selector: 'app-home-edition',
  templateUrl: './home-edition.component.html',
  styleUrls: ['./home-edition.component.css']
})

export class HomeEditionComponent implements OnInit {
  news:Actu;
  emptyNews:Actu;
  id;
  isSelected:boolean;
  constructor(public servNews:ActuService,public ident:IdentService,private routeParam:ActivatedRoute,private router:Router) {
  this.news={ 
         actuTitle:'',
         actuContent:'',
         actuImg:'',
         actuAlias:'',
         actuAuteur:'',
         actuDate:new Date(Date.now())
      };
  this.emptyNews={ 
         actuTitle:'',
         actuContent:'',
         actuImg:'',
         actuAlias:'',
         actuAuteur:'',
         actuDate:new Date(Date.now())
      };
    this.id=-1;
  }

  ngOnInit() {
    this.routeParam.params.subscribe(params => {
      this.id= +params['id'];
    });
    if(!isNaN(this.id)&&this.id<this.servNews.listActu.length){
      this.isSelected=true;
      this.news={
         actuTitle:this.servNews.listActu[this.id].actuTitle,
         actuContent:this.servNews.listActu[this.id].actuContent,
         actuImg:this.servNews.listActu[this.id].actuImg,
         actuAlias:this.servNews.listActu[this.id].actuAlias,
         actuAuteur:this.servNews.listActu[this.id].actuAuteur,
         actuDate:this.servNews.listActu[this.id].actuDate
        };
    }else{
      this.isSelected=false;
    }


  }
  onSelect(e){
    // this.id=this.servNews.listActu.findIndex(element=>element.actuTitle==e.actuTitle);
    this.id=e;
    if(this.id==-1)this.news=this.emptyNews;
    else this.news={
         actuTitle:this.servNews.listActu[this.id].actuTitle,
         actuContent:this.servNews.listActu[this.id].actuContent,
         actuImg:this.servNews.listActu[this.id].actuImg,
         actuAlias:this.servNews.listActu[this.id].actuAlias,
         actuAuteur:this.servNews.listActu[this.id].actuAuteur,
         actuDate:this.servNews.listActu[this.id].actuDate
        };
  }

  editNews(){
    if(this.id==-1||isNaN(this.id)){
      this.news.actuDate=new Date(Date.now());
      this.news.actuAuteur=this.ident.cred.id;
      this.id=this.servNews.listActu.push(this.news)-1;
      
    }
    else this.servNews.listActu[this.id]=this.news;
    this.router.navigate(['/actualite/'+this.id]);
  }
  isIdDefined()
  {
    return isNaN(this.id);
  }
}
