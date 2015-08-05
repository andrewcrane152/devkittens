angular.module('devKittens')

.directive('mentorModal', function() {

	return {
		restrict: 'EA',
		templateUrl: './public/templates/mentorModal.html',
		scope: {
			setMentor: '&',
			toggleMentorModal: '&',
			mentor: '=',
			currentMentor: '=',
			options: '='
		},
		controller: function($scope, userService) {
			$scope.studentSection = false;

			$scope.showStudents = function() {
				$scope.studentSection = !$scope.studentSection;
			};

			$scope.toggleAddMentos = false;
			$scope.toggleAddSchedule = false;

			$scope.toggleViewToMentos = false;
			$scope.toggleViewToSchedule = false;
			$scope.toggleViewToTasks = false;
			$scope.toggleViewToNotes = false;
			$scope.toggleViewToPermissions = false;

			$scope.activateMentos = function() {
				$scope.activeTab = 'mentos';
				$scope.toggleViewToMentos = true;

				$scope.toggleViewToSchedule = false;
				$scope.toggleViewToTasks = false;	
				$scope.toggleViewToNotes = false;
				$scope.toggleViewToPermissions = false;
			}

			$scope.activateSchedule = function() {
				$scope.activeTab = 'schedule';
				$scope.toggleViewToSchedule = true;

				$scope.toggleViewToTasks = false;
				$scope.toggleViewToNotes = false;
				$scope.toggleViewToMentos = false;
				$scope.toggleViewToPermissions = false;
			}

			$scope.activateTasks = function() {
				$scope.activeTab = 'tasks';
				$scope.toggleViewToTasks = true;

				$scope.toggleViewToNotes = false;
				$scope.toggleViewToMentos = false;
				$scope.toggleViewToSchedule = false;
				$scope.toggleViewToPermissions = false;
			}

			$scope.activateNotes = function() {
				$scope.activeTab = 'notes';
				$scope.toggleViewToNotes = true;

				$scope.toggleViewToMentos = false;
				$scope.toggleViewToSchedule = false;
				$scope.toggleViewToTasks = false;
				$scope.toggleViewToPermissions = false;
			}

			$scope.activatePermissions = function() {
				$scope.activeTab = 'Permissions';
				$scope.toggleViewToPermissions = true;

				$scope.toggleViewToMentos = false;
				$scope.toggleViewToSchedule = false;
				$scope.toggleViewToTasks = false;
				$scope.toggleViewToNotes = false;
			}

			$scope.addMentosView = function() {
				$scope.toggleAddMentos = !$scope.toggleAddMentos;
			}

			$scope.addScheduleView = function() {
				$scope.toggleAddSchedule = !$scope.toggleAddSchedule;
			}

			$scope.addTasksView = function() {
				$scope.toggleAddTasks = !$scope.toggleAddTasks;
			}

			$scope.addNotesView = function() {
				$scope.toggleAddNotes = !$scope.toggleAddNotes;
			}

			$scope.addPermissionsView = function() {
				$scope.toggleAddPermissions = !$scope.toggleAddPermissions;
			}

			$scope.editPermissions = function(obj) {
				// console.log(obj, $scope.currentTeacher);
				userService.mentorPermissions(obj, $scope.currentMentor)
				.then(function(response) {
					console.log(response);
				})
			}

		}
	}

})