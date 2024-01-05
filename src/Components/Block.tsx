import './Block.css';


const Block = (props: any) => {
    return (
        <div className='block'
            onClick={props.onClick}>{props.value}</div>
    )
}

export default Block;