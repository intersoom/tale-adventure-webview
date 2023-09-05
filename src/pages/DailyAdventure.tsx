import { useEffect, useState } from "react";
import ActiveBox from "../components/ActiveBox";
import BlankBox from "../components/BlankBox";
import NoBox from "../components/NoBox";
import { letterData, meanings } from "../utils/data";
import WordBox from "../components/WordBox";
import Toast from "../components/Toast";

function DailyAdventure() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedList, setSelectedList] = useState<number[]>([]);
  const [questionState, setQuestionState] = useState<
    "wrong" | "null" | "right"
  >("null");
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    // 0 -> 1
    if (
      activeIndex === 0 &&
      selectedList.includes(0) &&
      selectedList.includes(1) &&
      selectedList.includes(2) &&
      selectedList.includes(3)
    ) {
      setQuestionState("right");
      setTimeout(() => {
        setActiveIndex(1);
      }, 100);
    }

    // 1 -> 2
    if (
      activeIndex === 1 &&
      selectedList.includes(4) &&
      selectedList.includes(5)
    ) {
      setQuestionState("right");
      setTimeout(() => {
        setActiveIndex(2);
      }, 100);
    }

    // 2 -> 3
    if (
      activeIndex === 2 &&
      selectedList.includes(6) &&
      selectedList.includes(7)
    ) {
      setQuestionState("right");
      setTimeout(() => {
        setActiveIndex(3);
      }, 100);
    }

    // 3 -> 4
    if (
      activeIndex === 3 &&
      selectedList.includes(8) &&
      selectedList.includes(9) &&
      selectedList.includes(10)
    ) {
      setQuestionState("right");
      setTimeout(() => {
        setActiveIndex(4);
      }, 100);
    }

    if (
      activeIndex === 4 &&
      selectedList.includes(11) &&
      selectedList.includes(12) &&
      selectedList.includes(13)
    ) {
      setQuestionState("right");
      setTimeout(() => {
        setDone(true);
      }, 300);
    }
  }, [selectedList, activeIndex]);

  useEffect(() => {
    questionState !== "null" &&
      setTimeout(() => {
        setQuestionState("null");
      }, 500);
  }, [questionState]);

  return (
    <div className="flex flex-col items-center bg-[#F2E9FF] h-screen w-screen overflow-hidden">
      <div className="flex flex-col items-center bg-[url('./images/bgQuiz.png')] h-screen w-screen bg-transparent bg-opacity-50 bg-cover">
        <span className="w-[212px] h-[126px] text-[35px] text-[#3D3D3D] bg-[url('./images/blueCloud.png')] bg-cover font-[700] flex justify-center items-center mt-4">{`Day ${1}`}</span>
        <div className="w-[380px] bg-[rgba(255,255,255,0.50)] rounded-[20px] mt-[18px] p-3 flex flex-col justify-center items-center">
          <div className="flex flex-row">
            {activeIndex >= 0 ? (
              selectedList.includes(0) ? (
                <WordBox>백</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            {activeIndex >= 1 ? (
              selectedList.includes(4) ? (
                <WordBox>두</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            {activeIndex >= 1 ? (
              selectedList.includes(5) ? (
                <WordBox>산</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
            {activeIndex >= 4 ? (
              selectedList.includes(11) ? (
                <WordBox>유</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
          </div>
          <div className="flex flex-row">
            {activeIndex >= 0 ? (
              selectedList.includes(1) ? (
                <WordBox>과</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
            {activeIndex >= 2 ? (
              selectedList.includes(6) ? (
                <WordBox>수</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
            {activeIndex >= 4 ? (
              selectedList.includes(12) ? (
                <WordBox>일</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
          </div>
          <div className="flex flex-row">
            {activeIndex >= 0 ? (
              selectedList.includes(2) ? (
                <WordBox>사</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
            {activeIndex >= 2 ? (
              selectedList.includes(7) ? (
                <WordBox>유</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            {activeIndex >= 3 ? (
              selectedList.includes(8) ? (
                <WordBox>비</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            {activeIndex >= 3 ? (
              selectedList.includes(9) ? (
                <WordBox>무</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            {activeIndex >= 3 ? (
              selectedList.includes(10) ? (
                <WordBox>환</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
          </div>
          <div className="flex flex-row">
            {activeIndex >= 0 ? (
              selectedList.includes(3) ? (
                <WordBox>전</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
            <NoBox></NoBox>
            <NoBox></NoBox>
            {activeIndex >= 4 ? (
              selectedList.includes(13) ? (
                <WordBox>이</WordBox>
              ) : (
                <ActiveBox></ActiveBox>
              )
            ) : (
              <BlankBox></BlankBox>
            )}
            <NoBox></NoBox>
          </div>
        </div>
        {questionState === "right" ? (
          <div className="w-[72px] h-[72px] mt-[-45px] bg-[url('./images/right.png')] bg-cover"></div>
        ) : null}
        {questionState === "wrong" ? (
          <div className="w-[72px] h-[72px] mt-[-45px] bg-[url('./images/wrong.png')] bg-cover"></div>
        ) : null}
        {questionState === "null" ? (
          <div className="w-[72px] h-[72px] mt-[-45px]"></div>
        ) : null}
        {/* <div className="w-[335px] h-[88px] bg-white rounded-[20px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.1)] mt-[11px]"></div> */}
        <div className="flex flex-col mt-[-10px]">
          <div className="bg-orange-400 w-[111px] h-[38px] py-[10px] px-[24px] rounded-[30px] text-[16px] text-white font-bold flex justify-center items-center mb-[-19px] z-10">
            단어 설명
          </div>
          <div className="w-[380px] h-[90px] bg-[rgba(0,0,0,0.30)] rounded-[19px] text-white px-[30px] pt-[26px] pb-[20px] font-bold">
            {meanings[activeIndex]}
          </div>
        </div>
        <div className="w-full h-48 bg-white rounded-tl-3xl rounded-tr-3xl shadow absolute bottom-[0px] pt-[33px] pl-[16px] pb-[55px] pr-[16px] flex flex-col flex-wrap">
          {letterData.map((item, index) => {
            return selectedList.includes(index) ? (
              <NoBox></NoBox>
            ) : (
              <WordBox
                onClick={() => {
                  // active === 0
                  !selectedList.includes(index) &&
                    activeIndex === 0 &&
                    ([0, 1, 2, 3].includes(index)
                      ? setSelectedList([...selectedList, index])
                      : setQuestionState("wrong"));
                  activeIndex === 1 &&
                    ([4, 5].includes(index)
                      ? setSelectedList([...selectedList, index])
                      : setQuestionState("wrong"));
                  activeIndex === 2 &&
                    ([6, 7].includes(index)
                      ? setSelectedList([...selectedList, index])
                      : setQuestionState("wrong"));
                  activeIndex === 3 &&
                    ([8, 9, 10].includes(index)
                      ? setSelectedList([...selectedList, index])
                      : setQuestionState("wrong"));
                  activeIndex === 4 &&
                    ([11, 12, 13].includes(index)
                      ? setSelectedList([...selectedList, index])
                      : setQuestionState("wrong"));
                }}
              >
                {item}
              </WordBox>
            );
          })}
        </div>
      </div>
      {done && (
        <div className="absolute flex flex-col items-center top-1/3 z-20">
          <span className="bg-[url('./images/done.png')] w-[70px] h-[70px] bg-cover"></span>
          <Toast>
            {
              <>
                <span className="bg-[url('./images/stars.png')] w-[34px] h-[24px] bg-cover mr-2"></span>
                <p>뒤로가기를 눌러주세요!</p>
                <span className="bg-[url('./images/cat.png')] w-[34px] h-[34px] bg-cover ml-2"></span>
              </>
            }
          </Toast>
        </div>
      )}
    </div>
  );
}
export default DailyAdventure;
