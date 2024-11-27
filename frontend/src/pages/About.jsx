import React from "react";

function About() {
  return (
    <div className="mt-10 sm:mt-20 flex flex-col items-end mx-auto w-[95%] sm:w-[90%] h-auto ">
      <div className="flex w-full h-auto flex-col custom:flex-row gap-5 custom:gap-12 max-lg:gap-14 items-start custom:items-center justify-around border-b border-solid border-[#E4E4E7] pb-9 px-0 mb-10 custom:px-12 max-lg:px-16">
        <h1 className="font-semibold text-5xl w-full custom:w-1/2">
          About <span className="text-orange-500">AcaDify</span>
        </h1>
        <p className="w-full custom:w-2/3 text-[#59595A] text-base leading-6">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      {/* Achivements */}
      <div className="w-full flex flex-col gap-10 mb-16">
        <div className="flex flex-col gap-2 flex-grow-0 self-stretch justify-between items-start">
          <h1 className="font-semibold text-2xl flex-grow-0 self-stretch">
            Achivements
          </h1>
          <p className="text-[#59595A] text-sm leading-6">
            Our commitment to excellence has led us to achieve significant
            milestones along our journey. Here are some of our notable
            achievements
          </p>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M18.6721 34.6668L18.9996 35.9918C19.4144 37.7143 20.3205 38.5977 22.1216 38.5977H33.8783C35.6905 38.5977 36.5856 37.7364 37.0113 35.9918L37.3388 34.6668H18.6721ZM18.3119 33.154H37.7099L39.7621 24.6519L38.867 24.133L33.8347 27.843C33.4635 28.108 33.2125 28.0086 33.005 27.7105L28.2674 20.4671L27.7435 20.445L22.9622 27.7436C22.7766 28.0307 22.5583 28.1191 22.1871 27.854L17.253 24.2103L16.2051 24.4863L18.3119 33.154ZM16.609 26.8602C18.0499 26.8602 19.207 25.6788 19.207 24.2103C19.207 22.7748 18.0499 21.5823 16.609 21.5823C15.168 21.5823 14 22.7638 14 24.2103C14 25.6788 15.1789 26.8602 16.609 26.8602ZM28.0055 22.2669C29.4355 22.2669 30.6035 21.0854 30.6035 19.6279C30.6035 18.1925 29.4355 17 28.0055 17C26.5536 17 25.3965 18.1815 25.3965 19.6279C25.3965 21.0854 26.5645 22.2669 28.0055 22.2669ZM39.391 26.8602C40.8211 26.8602 42 25.6788 42 24.2103C42 22.7638 40.832 21.5823 39.391 21.5823C37.961 21.5823 36.793 22.7748 36.793 24.2103C36.793 25.6788 37.961 26.8602 39.391 26.8602Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">Trusted by Thousands</h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  We have successfully served thousands of students, helping
                  them unlock their potential and achieve their career goals.
                </p>
              </div>
            </div>
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M28.148 41.4375C32.273 41.4375 35.6011 38.1094 35.6011 33.9961C35.6011 29.8711 32.273 26.543 28.148 26.543C24.0347 26.543 20.7066 29.8711 20.7066 33.9961C20.7066 38.1094 24.0347 41.4375 28.148 41.4375ZM26.0269 37.8281C25.5816 38.1562 25.1128 37.8164 25.2886 37.3008L26.1323 34.7812L23.9761 33.2461C23.5659 32.9414 23.6948 32.3672 24.2573 32.3672L26.9058 32.3906L27.7144 29.8594C27.8784 29.3438 28.4409 29.3438 28.605 29.8594L29.4136 32.3906L32.062 32.3672C32.6245 32.3672 32.7417 32.9531 32.3433 33.2344L30.187 34.7812L31.0308 37.3008C31.2066 37.8164 30.7378 38.1562 30.2925 37.8281L28.1597 36.2695L26.0269 37.8281ZM21.0113 28.418C22.1597 26.9648 23.7417 25.8633 25.5581 25.3242L20.2495 15.7852L17.1675 20.4844C16.9566 20.7891 16.9449 21.1289 17.1324 21.4336L21.0113 28.418ZM25.523 21.3281H30.7847L34.3589 15H21.9488L25.523 21.3281ZM30.7495 25.3242C32.5777 25.8633 34.148 26.9648 35.2964 28.418L39.187 21.4336C39.3628 21.1289 39.3511 20.7891 39.1402 20.4844L36.0581 15.7852L30.7495 25.3242Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">Award Winning Courses</h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  We have successfully served thousands of students, helping
                  them unlock their potential and achieve their career goals.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M24.5393 34.9684C28.5075 33.8763 30.2058 30.7396 29.087 26.5109L27.5818 20.763C27.1713 19.2193 26.1733 18.6609 24.6359 19.0715L16.6594 21.231C15.114 21.658 14.5425 22.6434 14.953 24.2199L16.4501 29.9595C17.5528 34.1802 20.5712 36.0523 24.5393 34.9684ZM23.7828 32.0288C22.1005 32.4722 20.4665 31.8892 19.6053 30.4933C19.4363 30.2388 19.5812 29.9842 19.9031 30.0089C20.9736 30.0992 22.2454 29.9103 23.163 29.6558C24.0644 29.4176 25.2396 28.9414 26.133 28.3091C26.3986 28.112 26.6643 28.2516 26.6481 28.5883C26.5918 30.2306 25.473 31.5526 23.7828 32.0288ZM19.726 26.6341C19.1224 26.8064 19.0419 27.217 18.7843 27.2581C18.6636 27.2827 18.5187 27.1431 18.4463 26.905C18.2531 26.2071 18.6877 25.4598 19.3799 25.2874C20.0802 25.115 20.7966 25.5337 20.9736 26.2071C21.0461 26.4534 20.9817 26.6423 20.8529 26.6915C20.5551 26.7982 20.2734 26.4862 19.726 26.6341ZM24.6359 25.2792C24.0322 25.4598 23.9517 25.8622 23.6942 25.895C23.5735 25.9196 23.4286 25.7801 23.3562 25.5501C23.163 24.8604 23.5976 24.105 24.2898 23.9325C24.9981 23.7437 25.7064 24.1707 25.8835 24.8522C25.9559 25.1067 25.8916 25.2874 25.7628 25.3367C25.473 25.4434 25.1832 25.1232 24.6359 25.2792ZM40.1544 23.3577L32.1859 21.1818C30.7692 20.7958 29.7712 21.2228 29.3606 22.5038L29.2641 22.8569L30.1495 26.2235C31.0348 29.5819 30.3105 32.423 28.2499 34.2623C29.0387 35.5925 30.4393 36.5861 32.2905 37.0869C36.2426 38.1626 39.2449 36.2904 40.3556 32.0699L41.8769 26.3384C42.2793 24.7865 41.6998 23.7765 40.1544 23.3577ZM32.041 28.3337C31.4856 28.1942 31.1556 27.6194 31.3085 27.0364C31.4614 26.4698 32.0249 26.1331 32.5802 26.2892C33.1356 26.4452 33.4657 27.0282 33.3208 27.5947C33.1678 28.1613 32.6044 28.4898 32.041 28.3337ZM36.7657 29.6229C36.2184 29.4751 35.8884 28.8921 36.0413 28.3173C36.1862 27.7508 36.7497 27.4223 37.3051 27.5783C37.8685 27.7179 38.1904 28.3009 38.0455 28.8757C37.8926 29.4423 37.3292 29.7789 36.7657 29.6229ZM33.3771 32.776C32.5401 32.5379 31.7351 32.5297 30.7049 32.7596C30.3829 32.8335 30.1897 32.5625 30.3588 32.2916C31.051 31.183 32.4515 30.7232 33.8118 31.1092C35.2203 31.4704 36.1782 32.5707 36.2264 33.8845C36.2426 34.213 35.9448 34.3526 35.7033 34.1309C34.9065 33.3919 34.2223 32.9977 33.3771 32.776Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">
                  Positive Student Feedback
                </h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  We take pride in the positive feedback we receive from our
                  students, who appreciate the practicality and relevance of our
                  course materials.
                </p>
              </div>
            </div>
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="55"
                    height="55"
                    rx="5.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M27.5859 39.6602C27.7734 39.6602 28.0664 39.5898 28.3594 39.4375C35.0273 35.9453 37.1719 34.1992 37.1719 29.9922V21.1562C37.1719 19.9492 36.6562 19.5625 35.6719 19.1523C34.3008 18.5898 29.918 16.9961 28.5586 16.5273C28.2422 16.4219 27.9141 16.3633 27.5859 16.3633C27.2578 16.3633 26.9297 16.4336 26.625 16.5273C25.2539 16.9727 20.8711 18.6016 19.5 19.1523C18.5273 19.5508 18 19.9492 18 21.1562V29.9922C18 34.1992 20.2617 35.7461 26.8125 39.4375C27.1172 39.6016 27.3984 39.6602 27.5859 39.6602ZM22.3008 28.3984C22.3008 28.2578 22.3711 28.082 22.5 27.9297L29.1211 19.6211C29.625 18.9883 30.4688 19.4102 30.1641 20.1953L27.9844 26.0547H32.0742C32.3906 26.0547 32.625 26.2773 32.625 26.5938C32.625 26.7344 32.5547 26.9102 32.4258 27.0625L25.8047 35.3711C25.3008 36.0039 24.4688 35.582 24.7617 34.8086L26.9531 28.9375H22.8516C22.5469 28.9375 22.3008 28.7148 22.3008 28.3984Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">Industry Partnerships</h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  We have established strong partnerships with industry leaders,
                  enabling us to provide our students with access to the latest
                  tools and technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Goals */}
      <div className="w-full flex flex-col gap-10 mb-16">
        <div className="flex flex-col gap-2 flex-grow-0 self-stretch justify-between">
          <h1 className="font-semibold text-2xl flex-grow-0 self-stretch">
            Our Goals
          </h1>
          <p className="text-[#59595A] text-sm leading-5">
            At Acadify, our goal is to empower individuals from all backgrounds
            to thrive in the world of design and development. We believe that
            education should be accessible and transformative, enabling learners
            to pursue their passions and make a meaningful impact. Through our
            carefully crafted courses, we aim to
          </p>
        </div>

        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M26.6573 43.8559H33.3427C37.1504 43.8559 39.0325 41.9011 38.9996 37.9915C38.9558 33.5266 38.934 30.2834 38.8246 27.851C38.5073 20.6982 36.5268 18.599 30.0055 18.599C23.4842 18.599 21.4928 20.6982 21.1755 27.851C21.0661 30.2834 21.0442 33.5266 21.0004 37.9915C20.9676 41.9011 22.8496 43.8559 26.6573 43.8559ZM26.34 39.4466C25.399 39.4466 24.7972 38.8245 24.7972 37.8916V32.1605C24.7972 31.2164 25.399 30.5944 26.34 30.5944H33.671C34.6011 30.5944 35.2028 31.2164 35.2028 32.1605V37.8916C35.2028 38.8245 34.6011 39.4466 33.671 39.4466H26.34ZM24.7972 34.8706H35.2028V33.5488H24.7972V34.8706ZM30.0055 16C27.9047 16 26.4275 17.4439 26.4275 19.4098H27.9703C27.9703 18.3324 28.8019 17.5661 30.0055 17.5661C31.1981 17.5661 32.0407 18.3324 32.0407 19.4098H33.5834C33.5834 17.4439 32.0954 16 30.0055 16Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">
                  Provide Practical Skills
                </h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  We focus on delivering practical skills that are relevant to
                  the current industry demands. Our courses are designed to
                  equip learners with the knowledge and tools needed to excel in
                  their chosen field.
                </p>
              </div>
            </div>
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M23.5977 42.1133H38.7734C39.2891 42.1133 39.7109 41.7031 39.7109 41.1758C39.7109 40.7656 39.4297 40.4023 39.0547 40.2734C37.5781 39.6875 37.2734 37.7773 38.7266 36.3125C39.1719 35.8672 39.7109 35.293 39.7109 34.1211V20.6797C39.7109 18.2422 38.5039 17 36.0781 17H23.6328C21.207 17 20 18.2305 20 20.6797V38.4922C20 40.9062 21.2188 42.1133 23.5977 42.1133ZM23.7031 40.2266C22.5195 40.2266 21.8867 39.5938 21.8867 38.4805C21.8867 37.4258 22.6367 36.7461 23.8086 36.7461H35.832C35.9844 36.7461 36.125 36.7344 36.2422 36.7109C35.6914 37.9297 35.7852 39.2188 36.4062 40.2266H23.7031ZM23.3516 34.9648C22.9883 34.9648 22.6836 34.6602 22.6836 34.2852V19.4844C22.6836 19.1094 22.9883 18.8164 23.3516 18.8164C23.7148 18.8164 24.0312 19.1094 24.0312 19.4844V34.2852C24.0312 34.6602 23.7148 34.9648 23.3516 34.9648Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">
                  Foster Creative Problem-Solving
                </h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  We encourage creative thinking and problem-solving abilities,
                  allowing our students to tackle real-world challenges with
                  confidence and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M16 30.4852C16 32.4946 17.3923 33.5977 18.9586 33.5977C19.616 33.5977 20.1091 33.4105 20.6989 33.0363C21.25 32.6916 21.6464 32.8983 21.6464 33.381V37.0254C21.6464 38.9658 22.6519 39.9606 24.5759 39.9606H27.1574C27.6215 39.9606 27.8246 39.5666 27.4959 39.0052C27.1188 38.4043 26.9351 37.902 26.9351 37.2322C26.9351 35.6366 28.0276 34.2183 30 34.2183C31.9724 34.2183 33.0553 35.6366 33.0553 37.2322C33.0553 37.902 32.8715 38.4043 32.5041 39.0052C32.1754 39.5666 32.3687 39.9606 32.8426 39.9606H35.4241C37.3481 39.9606 38.3536 38.9658 38.3536 37.0254V33.381C38.3536 32.8983 38.75 32.6916 39.2915 33.0363C39.8909 33.4105 40.384 33.5977 41.0317 33.5977C42.6077 33.5977 44 32.4946 44 30.4852C44 28.466 42.6077 27.3629 41.0317 27.3629C40.384 27.3629 39.8909 27.55 39.2915 27.9243C38.75 28.269 38.3536 28.0622 38.3536 27.5796V23.9352C38.3536 22.0047 37.3481 21 35.4241 21H32.8426C32.3687 21 32.1754 21.4038 32.5041 21.9653C32.8715 22.5661 33.0553 23.0684 33.0553 23.7382C33.0553 25.3338 31.9724 26.7522 30 26.7522C28.0276 26.7522 26.9351 25.3338 26.9351 23.7382C26.9351 23.0684 27.1188 22.5661 27.4959 21.9653C27.8246 21.4038 27.6215 21 27.1574 21H24.5759C22.6519 21 21.6464 22.0047 21.6464 23.9352V27.5796C21.6464 28.0622 21.25 28.269 20.6989 27.9243C20.1091 27.55 19.616 27.3629 18.9586 27.3629C17.3923 27.3629 16 28.466 16 30.4852Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">
                  Promote Collaboration and Community
                </h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  We believe in the power of collaboration and peer learning.
                  Our platform fosters a supportive and inclusive community
                  where learners can connect, share insights, and grow together.
                </p>
              </div>
            </div>
            <div className="bg-white w-full flex flex-col gap-4 items-start justify-start p-6 rounded-md">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    fill="#FFF9F0"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="7.5"
                    stroke="#FFEACC"
                  />
                  <path
                    d="M38.8633 40.707C39.3906 40.707 39.8242 40.2852 39.8242 39.7695C39.8242 39.2422 39.3906 38.8086 38.8633 38.8086H37.4336V31.0391C37.4336 26.7617 34.1406 23.457 29.8633 23.457C25.5977 23.457 22.3047 26.7617 22.3047 31.0391V38.8086H20.8516C20.3359 38.8086 19.9258 39.2422 19.9258 39.7695C19.9258 40.2852 20.3359 40.707 20.8516 40.707H38.8633ZM30.8477 31.0742V38.8086H28.9023V31.0742C28.9023 30.5352 29.3242 30.0898 29.8633 30.0898C30.4023 30.0898 30.8477 30.5352 30.8477 31.0742ZM19.2461 31.8828C19.7969 31.8828 20.2773 31.4258 20.2773 30.8867C20.2773 30.3242 19.7969 29.8672 19.2461 29.8672H16.9961C16.457 29.8672 16 30.3359 16 30.8867C16 31.4141 16.457 31.8828 16.9961 31.8828H19.2461ZM21.6484 24.0898C22.0352 24.4766 22.6797 24.4883 23.0664 24.0898C23.4648 23.6914 23.4531 23.0586 23.0664 22.6719L21.4844 21.0781C21.1094 20.6797 20.4531 20.6797 20.0547 21.0781C19.668 21.4766 19.668 22.0977 20.0547 22.4961L21.6484 24.0898ZM28.8555 20.2695C28.8555 20.8203 29.3125 21.2891 29.8633 21.2891C30.4258 21.2891 30.8828 20.8203 30.8828 20.2695V18.0195C30.8828 17.4688 30.4141 17 29.8633 17C29.3125 17 28.8555 17.4688 28.8555 18.0195V20.2695ZM36.6484 22.6719C36.2617 23.0586 36.25 23.6914 36.6484 24.0898C37.0586 24.4883 37.6797 24.4766 38.0664 24.0898L39.6719 22.4961C40.0586 22.0977 40.0586 21.4766 39.6719 21.0781C39.2617 20.6797 38.6406 20.6797 38.2539 21.0781L36.6484 22.6719ZM42.7188 31.8828C43.2695 31.8828 43.7383 31.4141 43.7383 30.8867C43.7383 30.3359 43.2695 29.8672 42.7188 29.8672H40.4688C39.9297 29.8672 39.4609 30.3242 39.4609 30.8867C39.4609 31.4258 39.9297 31.8828 40.4688 31.8828H42.7188Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-lg font-medium">Stay Ahead of the Curve</h2>
                <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">
                  The digital landscape is constantly evolving, and we strive to
                  stay at the forefront of industry trends. We regularly update
                  our course content to ensure our students receive the latest
                  knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full p-6 custom:p-12 bg-white rounded-lg flex flex-col max-lg:flex-row items-start max-lg:items-center justify-start max-lg:justify-between gap-10 max-lg:gap-60 flex-grow self-stretch overflow-hidden">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl leading-[125%] custom:text-[38px] font-bold">
              <span className="text-orange-500">Together</span>, let's shape the
              future of digital innovation
            </h1>
            <p className="font-medium text-sm leading-[150%] text-[#59595A]">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>

          <div className="absolute -right-[28px] -bottom-[110px] max-lg:-top-10 max-lg:right-14">
          <svg className="w-[265px] h-[265px] custom:w-[300px] custom:h-[300px] max-lg:w-[440px] maxlg:h-[440px]" width="500" height="500" viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5326 183.333L75.6993 129.167H129.866V75L184.033 129.167L129.866 183.333H21.5326Z" fill="#F6F6F8"/>
<path d="M21.5326 75L75.6993 129.167V75H129.866L184.033 20.8334H75.6993L21.5326 75Z" fill="#F6F6F8"/>
          </svg>
          </div>

          <div className="w-[15rem] flex items-center justify-start max-lg:justify-end">
            <button className="text-sm hover:bg-orange-400 active:bg-[#E5E5E5] active:text-[#262626] active:scale-95 transition-all ease-in-out duration-200 text-white bg-orange-500 p-3 rounded-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
