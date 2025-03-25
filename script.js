// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, assignmentGroup, submissions) {}
    
      const result = [];

      const learnerScores = {};
      let currDate = new Date();

      for (let i = 0; i < LearnerSubmissions.length; i++) {
        let submission = LearnerSubmissions[i];
        let assignment;
      
      for (let n = 0; n < assignmentGroup.assignments.length; n++) {
        let assignmentData = assignmentGroup.assignments[n];
        if (assignmentData.id === submission.assignment_id){
          assignment = assignmentData;
          break;
        }
      }
      
    if (assignment) {
      let dueDate = new Date(assignment.due_at);
      if (dueDate < currDate) {
        if (!learnerScores[submission.learner_id]) {
          learnerScores[submission.learner_id] = {};
        }
        if (!learnerScores[submission.learner_id].scores) {
          learnerScores[submission.learner_id].scores = [];
        }
        let score = submission.submission.score;
        let submitDate = new Date(submission.submission.submitted_at);
      }

      learnerScores[submission.learner_id].scores.push({
        assignment_id: submission.assignment_id,
        score: score,
        points_possible: assignment.points_possible,
    });
    }
    }
  

    for (let learner in learnerScores) {
      let learnerData = learnerScores[learner];
      let totalScore = 0;
      let totalPossibleScore = 0
      let assignmentScoresonj = {};

      for (let m = 0; m <learnerData.scores.length; m++) {
        let score = learnerData.scores[m];

        if(typeof score.score !== "number") {
          console.log('Score cannot be negative!');
          return;
        }
        if ( typeofscore.points_possible !== "number" ||
          score.points_possible === 0
        ){
          console.log('Number cannot be negative!');
          return;
        }
        let averageScores = 0;
        if (totalPossibleScore > 0) {
          averageScores = totalScore / totalPossibleScore;
        } else {
          averageScores = 0
        }
        result.push({
          id: Number(learner),
          average: Number(averageScores * 100),
          ...assignmentScoresobj
        });
      }

      return result;

      // try/catch gave an error

    // } try {
    //   if (course.id !== assignmentGroup.course_id) {
    //     console.log("course id and assignment group id must match");
    //     return [];
    //   }catch (error) {
    //   console.log(error);

    //   return [];}
}
 


    // here, we would process this data to achieve the desired result.
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
  
    // return result;
  
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  