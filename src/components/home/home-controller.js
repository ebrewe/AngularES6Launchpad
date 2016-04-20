export default class HomeController{
   constructor(thingsService){
     this.name = 'World';
     this.thingsService = thingsService;
     this.thingsService.getThings();
   }
   changeName(name){
     this.name = name.length ? name : this.name;
   }

}

HomeController.$inject = ['things']
