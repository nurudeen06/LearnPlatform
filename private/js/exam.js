Notification.requestPermission(
		function(){

		}
	)
let que=[]
const Question = props => {
	let a,b,c,d,que
		 let to = Number(props.number)
		 que = data.question[to].question
		   a = data.question[to].options[0].a
		   b = data.question[to].options[0].b
		   c = data.question[to].options[0].c
		   d = data.question[to].options[0].d

	console.log(que)
	return (
		<div>
		<h2>({to + 1}) {que}</h2><br/> 
		<p><strong><input type="radio" value="a"/> {a} </strong></p> 
		<p><strong><input type="radio" value="b"/> {b}</strong></p> 
		<p><strong><input type="radio" value="c"/> {c}</strong></p>  
		<p><strong><input type="radio" value="d"/> {d}</strong></p> 
		</div>
		)
}
ReactDOM.render(<Question number="0"/>,display)