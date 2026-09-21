export default function Button({

children,
variant="primary",
className="",
...props

}){

const variants={

primary:
`
bg-blue-700
text-white

hover:bg-blue-800
`,

secondary:
`
bg-white
text-black

border

hover:bg-gray-100
`,

danger:
`
bg-red-600
text-white
`

}

return(

<button

className={`

inline-flex

items-center

justify-center

px-6
py-3

rounded-xl

font-medium

transition

${variants[variant]}

${className}

`}

{...props}

>

{children}

</button>

)

}