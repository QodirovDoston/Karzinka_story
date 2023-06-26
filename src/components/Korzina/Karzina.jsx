
import img from '../../assets/react.svg'
const KorzinaCart = () => {

    return (
       <>
       <div className="w-[1400px] mx-auto"> 
       <div 
            style={{ width: '18rem', height: 'auto' }}
            className={` text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '9rem'}}>
                        <img  src={img} className="img-fluid" />
                    </div>
                </div>
            <div>
                <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                </div>
                <div>
                    Rs. <span className="h3">0</span>
                </div>
                <button className={` flex align-center mx-auto border-spacing-2`}
                >
                    Add to cart
                </button>
            </div>
        </div>
       </div>
       </>
    );
};

export default KorzinaCart;