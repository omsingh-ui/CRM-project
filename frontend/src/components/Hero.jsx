import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section
      className="
      relative
      bg-gradient-to-br
      from-blue-700
      via-indigo-800
      to-purple-900
      text-white
      overflow-hidden
      "
    >

      {/* Background Glow Effects */}

      <div
        className="
        absolute
        top-20
        left-10
        w-72
        h-72
        bg-blue-400/30
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-10
        right-20
        w-96
        h-96
        bg-purple-400/20
        rounded-full
        blur-3xl
        "
      />


     <div
  className="
  relative
  max-w-7xl
  mx-auto
  px-6
 min-h-[68vh]
  grid
  lg:grid-cols-2
  gap-6
  items-center
  "
>


        {/* Left Content */}


        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >


          <div
            className="
            inline-flex
            items-center
            gap-2
            bg-white/10
            backdrop-blur-md
            px-5
            py-2
            rounded-full
            mb-6
            text-sm
            "
          >
            ✨ All-in-one CRM Solution
          </div>



          <h1
            className="
            text-4xl
            md:text-5xl
            font-black
            leading-[1.1]
            "
          >

            Manage Customers

            <br />

            Convert Leads

            <br />

            Grow Your Business

          </h1>



          <p
  className="
  mt-4
  text-lg
  md:text-xl
  leading-relaxed
  font-medium
  text-blue-100
  max-w-xl
  tracking-wide
  "
>
 Manage customers, track leads, and organize
your team's workflow with a powerful CRM
platform built for modern businesses.
</p>



          {/* Buttons */}


          {/* CTA Button */}

<div
  className="
  mt-8
  "
>

  <Link
    to="/register"
    className="
    inline-flex
    items-center
    justify-center
    bg-white
    text-blue-800
    px-8
    py-4
    rounded-2xl
    font-bold
    shadow-xl
    hover:scale-105
    hover:shadow-2xl
    transition
    duration-300
    "
  >
    Create Free Account
  </Link>

</div>


          {/* Trust Indicators */}


          
 <div
className="
flex
flex-wrap
gap-3
mt-8
"
>

<span
className="
px-4
py-2
rounded-full
bg-white/10
backdrop-blur-md
border
border-white/20
text-sm
text-blue-100
font-medium
"
>
✓ Secure Platform
</span>


<span
className="
px-4
py-2
rounded-full
bg-white/10
backdrop-blur-md
border
border-white/20
text-sm
text-blue-100
font-medium
"
>
✓ Easy Setup
</span>


<span
className="
px-4
py-2
rounded-full
bg-white/10
backdrop-blur-md
border
border-white/20
text-sm
text-blue-100
font-medium
"
>
✓ Real-time Updates
</span>


</div>
        </motion.div>





        {/* Right Preview */}



        <motion.div

          initial={{
            opacity: 0,
            scale: 0.9,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.9,
            delay: 0.2,
          }}

        className="
flex
justify-center
lg:justify-end
items-start
relative
lg:pl-6
pt-8
"
        >


          <motion.div

            animate={{
              y: [0, -10, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

           className="
w-full
max-w-[600px]
xl:max-w-[640px]
"
          >

            <HeroPreview />

          </motion.div>


        </motion.div>



      </div>


    </section>
  );
}