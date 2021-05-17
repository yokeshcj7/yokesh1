const Joi=require("joi");
const express = require("express");
const app = express();
app.use(express.json());

var courses=[{id:1,name:'BE'},{id:2,name:'cse'}];

app.get('/',(req,res)=>{
	res.send("hello world");
});

app.get('/api/courses',(req,res)=>{
	res.send([1,2,3]);
});

app.post('/api/courses',(req,res)=>{
	var result=validatecourse(req.body);
	if(result.error){
		res.status(400).send(result.error.details[0].message);
		return;
	}
	courses.push(course);
	res.send(courses);
});

app.put('/api/courses:id',(req,res)=>{
	const course=courses.find(c=>c.id==req.params.id)
	if(!course){
		res.status(404).send("course not found");
		return;}

	var result=validatecourse(req.body);
	if(result.error){
		res.status(400).send(result.error.details[0].message);
		return;}

	course.name=req.body.name;
	res.send(courses);		


})
const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`listening on port ${port}`)});

function validatecourse(course){
	const schema={
		name:Joi.string().min(3).required()
	};
	const result=Joi.validate(req.body,schema);
	return result;
}