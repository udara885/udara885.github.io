const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-black text-white flex items-start self-stretch md:py-6 md:px-20">
      <div className="flex justify-between items-center flex-auto md:px-8 md:shrink-0">
        <div>
          <h1 className="text-xl font-bold">{ "< Udara Lakshan />" }</h1>
        </div>
        <div className="flex flex-col items-end gap-3">
          <h4 className="text-xs font-semibold md:text-base">&copy; 2024 Udara Lakshan</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer