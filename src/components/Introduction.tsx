import Image from "../images/dogandcat.png";

function Introduction() {
  return (
    <div class="pt-32">
      <div class="text-center">
        <h1 class="w-[30rem] mx-auto"> We treat your pets like ours. </h1>

        <p class="pt-7 w-[30rem] mx-auto"> 
          We at Baybay Pet Lovers Clinic provide your fur babies 
          the best services with tender love and care.
        </p>

        <img 
          src={Image}
          alt="Dog and Cat"
          width={500}
          class="m-auto rounded-sm"/>
      </div>
    </div>
  )
}

export default Introduction;