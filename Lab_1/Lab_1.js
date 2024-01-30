/////////// =================== Q3.1 ================== ///////////

db.student.insertOne({
    FirstName:"Hadeer" , LastName:"Khaled", Age : 24 ,
    Faculty: { Name:"Faculty of Engineering" , Address : "Giza"} , 
    Grades: [{CourseName: "MongoDB", Grade:"B" , Pass:true} ,  {CourseName: "React", Grade:"B" , Pass:true}],
    IsFired: false
    })

/////////// =================== Q3.2 ================== ///////////
db.student.insertMany([
{
    "FirstName" : "Ali",
    "LastName" : "Khaled",
    "Age" : 24.0,
    "Faculty" : {
        "Name" : "Faculty of Engineering",
        "Address" : "Giza"
    },
    "Grades" : [ 
        {
            "CourseName" : "MongoDB",
            "Grade" : "B",
            "Pass" : true
        }, 
        {
            "CourseName" : "React",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
}

,
{

    "FirstName" : "Ahmed",
    "LastName" : "Khaled",
    "Age" : 24.0,
    "Faculty" : {
        "Name" : "Faculty of Engineering",
        "Address" : "Giza"
    },
    "Grades" : [ 
        {
            "CourseName" : "MongoDB",
            "Grade" : "B",
            "Pass" : true
        }, 
        {
            "CourseName" : "React",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
}
,
{
   
    "FirstName" : "Omnia",
    "LastName" : "Khaled",
    "Age" : 22.0,
    "Faculty" : {
        "Name" : "Computer Science",
        "Address" : "Giza"
    },
    "Grades" : [ 
        {
            "CourseName" : "HTML",
            "Grade" : "A",
            "Pass" : true
        }, 
        {
            "CourseName" : "CSS",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
}
,{

    "FirstName" : "Nour",
    "LastName" : "Ahmed",
    "Age" : 22.0,
    "Faculty" : {
        "Name" : "Computer Science",
        "Address" : "Giza"
    },
    "Grades" : [ 
        {
            "CourseName" : "HTML",
            "Grade" : "A",
            "Pass" : true
        }, 
        {
            "CourseName" : "CSS",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
},
{
    "FirstName" : "Hala",
    "LastName" : "Khaled",
    "Age" : 24.0,
    "Faculty" : {
        "Name" : "Faculty of Engineering",
        "Address" : "Giza"
    },
    "Grades" : [ 
        {
            "CourseName" : "MongoDB",
            "Grade" : "B",
            "Pass" : true
        }, 
        {
            "CourseName" : "React",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
}
,
{
    
    "FirstName" : "Rahma",
    "LastName" : "Khaled",
    "Age" : 18.0,
    "Faculty" : {
        "Name" : "Computer Science",
        "Address" : "Giza"
    },
    "Grades" : [ 
        {
            "CourseName" : "HTML",
            "Grade" : "A",
            "Pass" : true
        }, 
        {
            "CourseName" : "CSS",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
}
,
{
 
    "FirstName" : "Omar",
    "LastName" : "Khaled",
    "Age" : 14.0,
    "Faculty" : {
        "Name" : "Computer Science",
        "Address" : "Giza"
    },
    "Grades" : [ 
        {
            "CourseName" : "HTML",
            "Grade" : "A",
            "Pass" : true
        }, 
        {
            "CourseName" : "CSS",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
},
{
    "FirstName" : "Nada",
    "LastName" : "Ali",
    "Age" : 23.0,
    "Faculty" : {
        "Name" : null,
        "Address" : null
    },
    "Grades" : [ 
        {
            "CourseName" : "MongoDB",
            "Grade" : "B",
            "Pass" : true
        }, 
        {
            "CourseName" : "React",
            "Grade" : "B",
            "Pass" : true
        }
    ],
    "IsFired" : false
}
    ])


/////////// =================== Q4.1 ================== ///////////
db.student.find({})

/////////// =================== Q4.2 ================== ///////////

db.student.find({FirstName: "Hala"})

/////////// =================== Q4.3 ================== ///////////

db.student.find({ FirstName: { $ne: "Ahmed" } })

/////////// =================== Q4.4 ================== ///////////
db.student.find({Age:{$gte:21}  , "Faculty.Name":{$ne:null}  }  )

/////////// =================== Q4.5 ================== ///////////
db.student.findOne(
  { FirstName: "Nada" },
  { FirstName: 1, LastName: 1, IsFired: 1, _id: 0 }
)


/////////// =================== Q5 ================== ///////////
db.student.updateOne({FirstName: "Nour"}, {$set:{LastName: "Tarek"}})

/////////// =================== Q6 ================== ///////////
db.student.deleteMany({ IsFired: true })


/////////// =================== Q7 ================== ///////////
db.student.drop()

/////////// =================== Q8 ================== ///////////
db.dropDatabase()

