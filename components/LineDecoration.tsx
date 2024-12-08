export default function LineDecoration() {
    return (
        <span className="block pointer-events-none absolute h-full w-full z-[-1] inset-0">
            <span className="absolute block w-full h-full before:absolute before:left-[calc(-10px)] before:right-[calc(-10px)] before:border-t-[rgb(222,222,222)] before:border-t before:border-solid before:top-0 after:absolute after:left-[calc(-10px)] after:right-[calc(-10px)] after:border-t-[rgb(222,222,222)] after:border-t after:border-solid after:-bottom-px"></span>
            <span className="before:block before:top-[calc(-10px)] before:bottom-[calc(-10px)] before:content-[''] before:absolute before:border-l-[rgb(222,222,222)] before:border-l before:border-dashed before:left-0 after:top-[calc(-10px)] after:bottom-[calc(-10px)] after:content-[''] after:block after:absolute after:border-l-[rgb(222,222,222)] after:border-l after:border-dashed after:right-0"></span>
        </span>
    )
}