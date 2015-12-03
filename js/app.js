var app = angular.module('EmpLeavesSys', ['ui.router','720kb.datepicker','smart-table']);



// ****************** Route Configurations***************************************


app.config(function($stateProvider, $urlRouterProvider){
   $stateProvider
   .state('home', {
            url: '/home',
            templateUrl: 'views/employees.html',
            controller : 'employeesCtrl'
   })

   .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller : 'employeesCtrl'
   })

   .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller : 'employeesCtrl'
   })

    $urlRouterProvider.otherwise('/home');
});

// ****************** Controllers ***************************************

app.controller('employeesCtrl', function($scope, $http, $rootScope) {

// Simple GET request example:
// $http.get('js/empList.json')
//      .then(function(res){
//         $scope.employees = res.data;
// });

var empList = {
  "records" : [
  {
    "empId":"2201",
    "name":"Satish Borkar",
    "department":"Microsoft",
    "designation":"ASP.Net Developer",
    "contact":"+91 9850892963",
    "earnLeaves":"35",
    "obtainedLeaves":"09",
    "doj":"2002/08/08",
  },
  {
    "empId":"2202",
    "name":"Shoumen Dasgupta",
    "department":"Java",
    "designation":"Sr.Java Deveoper",
    "contact":"+91 9985792963",
    "earnLeaves":"25",
    "obtainedLeaves":"17",
    "doj":"2015/11/27",
  },
  {
    "empId":"2203",
    "name":"Pradip Borkar",
    "department":"Quality Assurance",
    "designation":"Software Engineer",
    "contact":"+91 9850892963",
    "earnLeaves":"35",
    "obtainedLeaves":"09",
    "doj":"1999/05/22",
  },
  {
    "empId":"2204",
    "name":"Lokesh Dasgupta",
    "department":"Microsoft",
    "designation":"Sr.ASP.Net Developer",
    "contact":"+91 9985792963",
    "earnLeaves":"25",
    "obtainedLeaves":"17",
    "doj":"2006/10/12",
  },
  {
    "empId":"2205",
    "name":"Knoji Borkar",
    "department":"Quality Assurance",
    "designation":"Jr.Software Engineer",
    "contact":"+91 9850892963",
    "earnLeaves":"35",
    "obtainedLeaves":"09",
    "doj":"2011/03/04",
  },
  {
    "empId":"2206",
    "name":"Karan Dasgupta",
    "department":"Java",
    "designation":"Java Deveoper",
    "contact":"+91 9985792963",
    "earnLeaves":"25",
    "obtainedLeaves":"17",
    "doj":"2012/12/02",
  }
  ]};

// JSON Data always start with [] and alwsys use double quote for naming.

// $http.get('js/empList.json').then(function(response){
//   $scope.jsonData = response.data; 
// });



// ****************** Validation Points***************************************
 // 1] count of obtained leaves should not be grater the earned leaves
 // 2] Employee ID should be auto generated
 // 3] Grid Table should have sorting on it
 // 4] DOJ should have calendar control
 // 5] Promt msg before deleting record
 // 6] icons for all btns and links


 $scope.xData = {};
 $scope.xFlag = false;

 $scope.employees = empList.records;

 $scope.AddNew = function(){
  $scope.addNewSection = true;
  $scope.updateBtn = false;
  $scope.newRecordBtn = true;
};

$scope.DeleteRecord = function(selectedIndex){
  // need alert box before delete record.
  $scope.employees.splice(selectedIndex, 1);
  $scope.addNewSection = false;
};


$scope.EditRecord = function(empData, index){
  //$scope.selected = angular.copy(empData);

  // return the 
  $scope.selectedIndex = index;

  // $scope.xData.empId = empData.empId;
  // $scope.xData.name = empData.name;
  // $scope.xData.department = empData.department;
  // $scope.xData.designation = empData.designation;
  // $scope.xData.contact = empData.contact;
  // $scope.xData.earnLeaves = empData.earnLeaves;
  // $scope.xData.obtainedLeaves = empData.obtainedLeaves;
  // $scope.xData.doj = empData.doj;

  $scope.xData = {
    empId : empData.empId,
    name : empData.name,
    department : empData.department,
    designation : empData.designation,
    contact : empData.contact,
    earnLeaves : empData.earnLeaves,
    obtainedLeaves : empData.obtainedLeaves,
    doj : empData.doj
  }

  $scope.addNewSection = true;
  $scope.updateBtn = true;
  $scope.newRecordBtn = false;
  
}

$scope.UpdateRecord = function(empData, index){

  $scope.employees[$scope.selectedIndex].empId = empData.empId;
  $scope.employees[$scope.selectedIndex].name = empData.name;
  $scope.employees[$scope.selectedIndex].department = empData.department;
  $scope.employees[$scope.selectedIndex].designation = empData.designation;
  $scope.employees[$scope.selectedIndex].contact = empData.contact;
  $scope.employees[$scope.selectedIndex].earnLeaves = empData.earnLeaves;
  $scope.employees[$scope.selectedIndex].obtainedLeaves = empData.obtainedLeaves;
  $scope.employees[$scope.selectedIndex].doj = empData.doj;

  $scope.addNewSection = false;
  $scope.CancelForm();
}

$scope.AddNewRecord = function(newRecord){

  // Show success msg after entry 
  $scope.employees.unshift(newRecord);

  // Display msg holder
  $scope.alertSuccess = true;
  // Display success msg
  $scope.newEntryMsg = true;

  // Hide Section
  $scope.addNewSection = false;

  // Array.push adds record to end of the array
  //$scope.employees.push(newRecord);
};

$scope.DeleteAll  = function(){
  //not able to add new items once did that
  $scope.employees = {}
}


$scope.CancelForm = function(){
  $scope.addNewSection = false;

  $scope.xData = {}

  // $scope.xData = {
  //   empId : '',
  //   name : '',
  //   department : department.options[0],
  //   designation : designation.options[0],
  //   contact : '',
  //   earnLeaves : earnLeaves.options[0],
  //   obtainedLeaves : '',
  //   doj : ''
  // }
}


});