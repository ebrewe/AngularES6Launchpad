export default class HomeController{
   constructor(){
     this.name = 'World';
   }
   changeName(name){
     this.name = name.length ? name : this.name;
   }

}
