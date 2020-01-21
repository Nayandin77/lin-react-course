import React from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "Rando Book 1", "author": "Dennis Nayandin", "pages":250},
    {"title": "Rando Book 2", "author": "Dennis Nayandin", "pages":260},
    {"title": "Rando Book 3", "author": "Dennis Nayandin", "pages":480},

]

const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} page</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
        </section>
    )
}

const Hiring = () => 
    <div>
        <p>The Library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () => 
    <div>
        <p>The Library is not hiring.</p>
    </div>

class Library extends React.Component {

    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages":1000}
        ]
    }

    state = { 
        open: false ,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        console.log("updated")
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
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100} />
                                </div>
                            )
                        })}
                    </div>}
                {this.state.hiring ? <Hiring /> : <NotHiring />}
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