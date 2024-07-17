import './price-tag.css'
import { ReactComponent as TickIcon } from './svg/tick.svg';
import { ReactComponent as CrossIcon } from './svg/cross.svg'

const priceTag = ({ plan, cost, planList }) => {
    console.log(planList)
    return (
        <div className="main-container">
            <div className="header">
                <div className='plan'>{plan}</div>
                <div className='subscribe-price'>${cost}/month</div>
            </div>
            <div className="body" style={{height: '27rem'}}>
                {planList?.map((item, index) =>
                {if(plan === 'FREE'){
                   return <div key={index} className='plan-items'  style={{ color: index <= 3 ? 'black' : '#ccc' }}>
                        {index <= 3 ? <TickIcon className="icon tick-icon" /> : <CrossIcon className="icon cross-icon" />}{item}</div>
                }
                else if(plan === 'PLUS'){
                   return <div key={index} className='plan-items'  style={{ color: index <= 6 ? 'black' : '#ccc' }}>
                    {index <= 6 ? <TickIcon className="icon tick-icon" /> : <CrossIcon className="icon cross-icon" />}{item}</div>
                }else{
                    return <div key={index} className='plan-items'>
                    <TickIcon className="icon tick-icon" />{item}</div>
                }}
                
                )}
            </div>
            <div  style={{ position: 'relative', top: '21px',textAlign: 'center' }}><button className='submit-button'>BUTTON</button></div>
        </div>

    )
}

export default priceTag