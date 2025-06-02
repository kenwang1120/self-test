import svgPaths from "./svg-1dnav8qnkf";
import clsx from "clsx";
type MemoryCardHelperProps = {
  additionalClassNames?: string[];
};

function MemoryCardHelper({
  additionalClassNames = [],
}: MemoryCardHelperProps) {
  return (
    <div className={clsx("absolute h-0 w-[523px]", additionalClassNames)}>
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 523 1"
        >
          <line
            id="Line 13"
            stroke="var(--stroke-0, #F2EDEE)"
            strokeLinecap="round"
            x1="0.5"
            x2="522.5"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame1321314088() {
  return (
    <div className="absolute left-[481px] top-[43px]">
      <div className="box-border content-stretch flex flex-row gap-[9px] items-center justify-start p-0 relative">
        <div
          className="bg-[rgba(255,225,105,0.5)] rounded-md shrink-0 size-2"
          data-name="Used Dot"
        />
        <div className="css-ab7z1s font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#384052] text-[8px] text-left w-5">
          <p className="block leading-[normal]">Used</p>
        </div>
        <div
          className="bg-[rgba(8,209,16,0.5)] rounded-md shrink-0 size-2"
          data-name="Free Dot"
        />
        <div className="css-ab7z1s font-['Inter:Regular',_sans-serif] font-normal h-2.5 leading-[0] not-italic relative shrink-0 text-[#384052] text-[8px] text-left w-[22px]">
          <p className="block leading-[normal]">Free</p>
        </div>
      </div>
    </div>
  );
}

function Group1090() {
  return (
    <div className="absolute contents left-[569px] top-[9px]">
      <div
        className="absolute bg-[#ffffff] left-[569px] rounded-sm size-1 top-[9px]"
        data-name="Dot 1"
      />
      <div
        className="absolute bg-[#ffffff] left-[576px] rounded-sm size-1 top-[9px]"
        data-name="Dot 2"
      />
      <div
        className="absolute bg-[#ffffff] left-[583px] rounded-sm size-1 top-[9px]"
        data-name="Dot 3"
      />
    </div>
  );
}

function EventHeader() {
  return (
    <div
      className="absolute bg-[#38739e] h-[21px] left-0 overflow-clip top-0 w-[600px]"
      data-name="EventHeader"
    >
      <div className="absolute css-lamiph font-['Inter:Bold',_sans-serif] font-bold leading-[0] left-[257px] not-italic text-[#dedede] text-[12px] text-left text-nowrap top-[3px]">
        <p className="block leading-[normal] whitespace-pre">Large Card</p>
      </div>
      <Group1090 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[308px] top-[109px]">
      <div className="absolute h-[37px] left-[308px] top-[109px] w-[89px]">
        <div className="absolute bottom-[-23.66%] left-[-6.742%] right-[-6.742%] top-[-5.405%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 101 48"
          >
            <g filter="url(#filter0_d_1_61)" id="Rectangle 15">
              <path d={svgPaths.p121db200} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="47.7542"
                id="filter0_d_1_61"
                width="101"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_61"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_61"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute css-p9rx0t font-['Poppins:Regular',_sans-serif] font-normal leading-[0] left-[313px] not-italic text-[#979699] text-[13px] text-left text-nowrap top-[114px]">
        <p className="block leading-[normal] whitespace-pre">9:51AM</p>
      </div>
      <div className="absolute css-rotcai font-['Poppins:Medium',_sans-serif] font-medium leading-[0] left-[364px] not-italic text-[13px] text-left text-neutral-700 text-nowrap top-[114px]">
        <p className="block leading-[normal] whitespace-pre">75%</p>
      </div>
    </div>
  );
}

export default function MemoryCard() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full"
      data-name="Memory Card"
    >
      <div className="absolute css-shvt1q font-['Quicksand:Bold',_sans-serif] font-bold leading-[0] left-[21px] text-[#323b4b] text-[20px] text-left text-nowrap top-[38px]">
        <p className="block leading-[normal] whitespace-pre">MEMORY</p>
      </div>
      <div
        className="absolute bg-[#90e1ae] h-[11px] left-[422px] rounded-br-[8px] rounded-tr-[8px] top-20 w-[148px]"
        data-name="Progress Background"
      />
      <div
        className="absolute bg-[rgba(255,225,105,0.5)] h-[11px] left-[39px] rounded-bl-[8px] rounded-tl-[8px] top-20 w-[383px]"
        data-name="Wired Segment"
      />
      <div className="absolute css-ab7z1s font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[185px] not-italic text-[#384052] text-[10px] text-left top-[68px] w-16">
        <p className="block leading-[normal]">5.44 GB</p>
      </div>
      <div className="absolute css-ab7z1s font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[480px] not-italic text-[#384052] text-[10px] text-left top-[68px] w-[62px]">
        <p className="block leading-[normal]">2.4 GB</p>
      </div>
      <div className="absolute css-ab7z1s font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[23px] not-italic text-[#384052] text-[10px] text-left text-nowrap top-[105px]">
        <p className="block leading-[normal] whitespace-pre">Pressure</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[39px] not-italic text-[#999999] text-[6px] text-right top-[123px] translate-x-[-100%] w-5">
        <p className="block leading-[normal]">100%</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[39px] not-italic text-[#999999] text-[6px] text-right top-[228px] translate-x-[-100%] w-[11px]">
        <p className="block leading-[normal]">0%</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[566px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">10:00AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[518px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">9:59AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[469px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">9:58AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[420px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">9:55AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[368px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">9:50AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[321px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">9:35AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[272px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">9:20AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[223px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">9:05AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[173px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">8:50AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[126px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">8:35AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-20 not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal]">8:20AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[39px] not-italic text-[#999999] text-[6px] text-right top-[177px] translate-x-[-100%] w-4">
        <p className="block leading-[normal]">50%</p>
      </div>
      <Frame1321314088 />
      <EventHeader />
      <div className="absolute h-6 left-12 top-[149px] w-[519px]">
        <div className="absolute bottom-[-56.249%] left-[-2.216%] right-[-2.216%] top-[-39.583%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 543 48"
          >
            <g filter="url(#filter0_d_1_67)" id="Vector 2">
              <path
                d={svgPaths.p43a44e0}
                stroke="var(--stroke-0, #F9CE84)"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="46.9998"
                id="filter0_d_1_67"
                width="542.001"
                x="0.499592"
                y="0.500031"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.819608 0 0 0 0 0.819608 0 0 0 0 0.0313726 0 0 0 0.44 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_67"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_67"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <MemoryCardHelper additionalClassNames={["left-[46px]", "top-[183px]"]} />
      <MemoryCardHelper additionalClassNames={["left-[47px]", "top-[183px]"]} />
      <MemoryCardHelper additionalClassNames={["left-[47px]", "top-[130px]"]} />
      <div className="absolute h-0 left-[46px] top-[233px] w-[524px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 524 1"
          >
            <line
              id="Line 14"
              stroke="var(--stroke-0, #F2EDEE)"
              strokeLinecap="round"
              x1="0.5"
              x2="523.5"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Group48 />
    </div>
  );
}