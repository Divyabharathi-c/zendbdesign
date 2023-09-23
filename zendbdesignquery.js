
Table "Mentor" {
    "mentor_id" INT [pk]
    "email" VARCHAR(255)
    "contact_number" VARCHAR(20)
  }
  
  Table "Task" {
    "task_id" INT [pk]
    "task_name" VARCHAR(255)
    "student_id" INT
    "mentor_id" INT
  }
  
  Table "Batch" {
    "batch_id" INT [pk]
    "batch_name" VARCHAR(255)
    "total_students" INT
    "mentor_id" INT
  }
  
  Table "Student" {
    "student_id" INT [pk]
    "student_name" VARCHAR(255)
    "mobile_number" VARCHAR(20)
    "email" VARCHAR(255)
    "mentor_id" INT
    "batch_id" INT
  }
  
  Ref:"Student"."student_id" < "Task"."student_id"
  
  Ref:"Mentor"."mentor_id" < "Task"."mentor_id"
  
  Ref:"Mentor"."mentor_id" < "Batch"."mentor_id"
  
  Ref:"Mentor"."mentor_id" < "Student"."mentor_id"
  
  Ref:"Batch"."batch_id" < "Student"."batch_id"
  