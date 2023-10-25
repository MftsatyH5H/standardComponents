import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  englishNav:string[] =['Title', 'Home', 'Item', 'Language', 'Search']

  frenchNav:string[] =['Titre', 'accueil', 'Article', 'Langue', 'Recherche']

  arabicNav:string[] =['العنوان', 'الرئيسيه', 'موضوع', 'اللغه', 'بحث']

  currentLanguage:string[] = this.englishNav

  changeLanguage(language: string){
    switch(language){
      case 'english' :{
        this.currentLanguage = this.englishNav
        break
      }

      case 'french' :{
        this.currentLanguage = this.frenchNav
        break
      }

      case 'arabic' :{
        this.currentLanguage = this.arabicNav
        break
      }
      default:{
        this.currentLanguage = this.englishNav
        break
      }
    }
  }
}
