import Fa from "solid-fa";

import { 
  faFacebook,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons"

function Contacts() {
  return (
    <div class="pt-96">
      <div class="text-center">
        <h1 class="w-[30rem] mx-auto"> Contact Us </h1>

        <p class="pt-7 w-[30rem] mx-auto"> 
          You can communicate with us by our phone numbers:
        </p>
        <p> 📱 0919 286 6735 </p>
        <p> 📞 (053) 830 0178 </p>

        <p class="pt-5"> or </p>

        <div class="flex justify-center pt-5 space-x-5 pb-96">
          <a href="https://www.facebook.com/BPLCVet">
            <div class="w-14 h-14 bg-blue-600 rounded-full flex items-center">
              <Fa 
                icon={faFacebook} 
                scale={2}
                class="pl-5 text-white"/>
            </div>
          </a>

          <a href="https://wa.me/639977733188">
            <div class="w-14 h-14 bg-green-500 rounded-full flex items-center">
              <Fa 
                icon={faWhatsapp} 
                scale={2}
                class="pl-[1.3rem] text-white"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts;