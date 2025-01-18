const Infobox=({children,title,button,backgroundColor})=>{
    return(<>
          <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 mb-4">
              {children}
            </p>
            <a
              href={button.href}
              className={`inline-block ${button.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
              {button.btntitle}
            </a>
          </div>
     </>)
}
export default Infobox