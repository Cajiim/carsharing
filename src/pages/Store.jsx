


import HeaderPage from "../components/HeaderPage";
import Navigation from "../components/navigation";
import RightSideBlockStory from "../components/RightSideBlockStory";


function Store() {
    return (
        <div>
            <div className='navigation'>
                <Navigation />
            </div>

            <div className='mainContent__page'>
                <HeaderPage />
                <div className="mainContent__page_container">
                    <div className="leftSide_store">
                         <p>Карточка</p> 
                    </div>
                    <div className="rightSide_store">
                        <RightSideBlockStory/>
                    </div>
                </div>

            </div>

        </div>
    )


}




export { Store }; 