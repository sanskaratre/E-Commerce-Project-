import { useRef } from 'react';
import classes from './Form.module.css';

const Form = (props) => {

    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    const submitHandler = (event) => {
        //event.preventDefault();

    const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
    };

    props.onaddMovie(movie);
}

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                 <label htmlFor='title'>Title</label>
                 <input type='text' id='title' placeholder="Enter Movie Name" ref={titleRef} />
            </div>
            <div className={classes.control}>
                 <label htmlFor='opening-text'>Opening Text</label>
                 <textarea rows='5' id='opening-text' placeholder='Write Something about Movie' ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                 <label htmlFor='date'>Release Date</label>
                 <input type='text' id='date' placeholder='Release Date of Movie' ref={releaseDateRef} />
            </div>
            <button style={{borderRadius:'3rem', alignContent:'center'}}>Add Movie</button>
        </form>
    
    )
};

export default Form;