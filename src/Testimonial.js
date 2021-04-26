function Testimonial({ user }) {
    return ( <
        div className = 'user-card' >
        <
        div className = 'images' >
        <
        img className = 'profile'
        src = { user.picture.large }
        alt = '' / >
        <
        img className = 'quote'
        src = './quote.png'
        alt = '' / >
        <
        /div> <
        h1 > { user.name.first } { user.name.last } < /h1> <
        h3 > { user.position } < /h3> <
        p > { user.testimonial } < /p> <
        /div>
    )
}

export default Testimonial;