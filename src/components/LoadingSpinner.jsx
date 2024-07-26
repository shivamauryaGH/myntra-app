const LoadingSpinner=()=>{
    return (
        <div classaName="d-fles justify-content-center spinner">
        <div classname="spinner-border" role="radius"
        style={{width:"5rem",height:"5rem"}}>
            <span className="visually-hidden">Loading...</span>
        </div>

        </div>
    );
};
export default LoadingSpinner;