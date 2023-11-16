export default function Loader() {
    return (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <div className="h-[75%] flex flex-col justify-center items-center">
                <div className="weight">
                    <div className="panda">
                        <div className="panda__contain">
                            <div className="panda__ears flex justify-between relative before:block after:block before:bg-panda-white after:bg-panda-white before:w-[18px] after:w-[18px] before:h-[18px] after:h-[18px] before:border-[6px] after:border-[6px] before:border-panda-black after:border-panda-black before:rounded-full after:rounded-full"/>
                            <div className="panda__head h-[50px] bg-panda-white w-[60px] relative flex justify-center">
                                <div className="panda__eyes flex justify-between absolute w-[65%] before:block after:block before:w-[16px] after:w-[16px] before:h-[16px] after:h-[16px] before:border-[6px] after:border-[6px] before:border-panda-black after:border-panda-black before:bg-panda-white after:bg-panda-white" />
                                <div className="panda__nose w-[30px] h-[30px] bg-panda-white border-[1px] border-panda-black rounded-2xl absolute flex flex-col items-center before:block before:h-[8px] before:w-[8px] before:rounded-md before:mt-[5px] before:bg-panda-black after:block after:h-[15px] after:w-[2px] after:border-sm after:bg-panda-black" />
                            </div>
                        </div>
                        <div className="panda__arms relative before:block after:block before:absolute after:absolute before:h-[30px] after:h-[30px] before:w-[13px] after:w-[13px] before:bg-panda-black after:bg-panda-black before:rounded-md after:rounded-md" />
                        <div className="panda__body bg-panda-white w-[60px] relative flex justify-center h-[75px] border-b-[5px] border-t-[20px] border-x-[0.3px] border-panda-black" />
                        <div className="panda__legs relative flex justify-between w-[55px] ml-[2.5px] before:block after:block before:h-[25px] after:h-[25px] before:w-[18px] after:w-[18px] before:rounded-b-md after:rounded-b-md before:bg-panda-black after:bg-panda-black" />
                    </div>
                </div>
                <div className="panda__shadow block bg-muted-foreground w-[60px] h-[60px] rounded-[30px] relative" />
            </div>
        </div>
    )
}