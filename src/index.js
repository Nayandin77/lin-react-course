import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "Rando Book 1", "author": "Dennis Nayandin", "pages":250},
    {"title": "Rando Book 2", "author": "Dennis Nayandin", "pages":260},
    {"title": "Rando Book 3", "author": "Dennis Nayandin", "pages":480},

]

const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} page</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
        </section>
    )
}

class Library extends React.Component {

    state = { 
        open: false ,
        freeBookmark: true
    }
    
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { books } = this.props
        return (
            <div>
                <h1>Welcome to the Library, we are {this.state.open ? 'open' : 'closed'}!</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => 
                        <Book
                            key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark} />
    
                )}
            </div>
        )
    }
    
}


render(
    <Library books={bookList}/>
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