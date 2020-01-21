import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

// data
let bookList = [
    {"title": "Rando Book 1", "author": "Dennis Nayandin", "pages":250},
    {"title": "Rando Book 2", "author": "Dennis Nayandin", "pages":260},
    {"title": "Rando Book 3", "author": "Dennis Nayandin", "pages":480},

]

// class FavoriteColorForm extends React.Component {
//     state = { value: ''}

//     newColor = e => this.setState({ value: e.target.value })

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>
//                     Favorite Color: 
//                     <input 
//                         type="color"
//                         onChange={this.newColor}
//                     />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }



render(
    <Library books={bookList} />
    ,
    document.getElementById('root')
)

// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }

// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }
// const calcGoalProgress = (total, goal) => {
//     return getPercent(total/goal)
// }

// const SkiDayCounter = ({total, powder, backcountry, goal}) => {
//     return(
//         <section>
//             <div>
//                 <p>Total Days: {total}</p>
//             </div>
//             <div>
//                 <p>Powder Days: {powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry Days: {backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
//             </div>
//         </section>
//     )
// }


// render(
//     <SkiDayCounter 
//         total={skiData.total}
//         powder={skiData.powder}
//         backcountry={skiData.backcountry}
//         goal={skiData.goal}
//     />
//     //<Message color="blue" age={22} msg="how are you?"/>
//     ,
//     document.getElementById('root')
// )

// class Message extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1 style={{color: this.props.color}}>
//                     {this.props.msg}
//                 </h1>
//                 <p>Test number: {this.props.age} minutes</p>
//             </div>
//         )
//     }
// }