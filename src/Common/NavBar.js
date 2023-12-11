import "./NavBar.css"

function NavBar (){
    return(<div className="flex justify-between py-6 px-32 shadow-md mb-2 sticky top-0 z-10 bg-white">
        <img src="/logo.svg" className="w-30 h-5"/>
        <div className="flex">
            <div class="button" >Signup</div>
            <div class="button">About</div>
            <div class="button">Products</div>
            <div class="button">Pricing</div>
            <div class="button">Support</div>
        </div>
    </div>)
}

export default NavBar