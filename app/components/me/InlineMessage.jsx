export default function InlineMessage({ message }) {
  return <div className="bg-black text-white text-center py-1 leading-[normal] text-xs">
    <marquee>{ message }</marquee> 
  </div>
}