angular.module('CarouselExperiment')
    .directive('mdCarousel',[function(){
       return {
           restrict: 'E',
           template:'<div class="md-carousel">    <div class="carousel-control-box">        <a class="left"><i class="material-icons">&#xE5C4;</i></a>        <a class="right"><i class="material-icons">&#xE5C8;</i></a>    </div>    <ul class="slides list-inline carousel-inner">        <li class="color-white" ng-repeat="slide in slideData">            <div class="img" style="background-image: url({{slide.background}});"></div>            <div class="caption">                <h2 class="title">{{slide.title}}</h2>                <h3 class="subtext">{{slide.subtext}}</h3>            </div>            <div class="backdrop-static"></div>        </li>    </ul>    <!--    <ul class="indication-dot">            <li></li>        </ul>-->    <div class="page-down">        <button class="go-down ic_expand_more">            <i class="material-icons">&#xE5CF;</i>        </button>    </div></div>',
           controller: "mdCarouselCtrl"
       }
    }]);
