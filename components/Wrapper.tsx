const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-6 border-2 h-full border-gray-300 rounded my-6  flex flex-col justify-center items-center">{children}</div>
    )
}
export default Wrapper