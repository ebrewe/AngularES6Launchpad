import angular from 'angular';

class HomeService {
  constructor(){
    this.things = {};
  }

  getThings(){
    fetch('data.json', {method: 'GET'})
      .then((data)=>{console.log(data)});
  }
}

export default angular.module('services.home-service', [])
  .service('things', HomeService)
  .name;
