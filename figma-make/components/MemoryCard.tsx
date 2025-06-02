import svgPaths from "../imports/svg-1dnav8qnkf";
import { useState, useRef, useEffect } from "react";
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
      <div className="box-border flex flex-row items-center justify-start gap-3 relative">
        <div className="flex items-center gap-1.5">
          <div
            className="bg-[rgba(255,225,105,0.5)] rounded-md shrink-0 size-2"
            data-name="Used Dot"
          />
          <div className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#384052] text-[8px]">
            <p className="leading-tight">Used</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="bg-[rgba(8,209,16,0.5)] rounded-md shrink-0 size-2"
            data-name="Free Dot"
          />
          <div className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#384052] text-[8px]">
            <p className="leading-tight">Free</p>
          </div>
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

function CustomTooltip({ visible, position }: { visible: boolean, position: { x: number, y: number } }) {
  if (!visible) return null;

  return (
    <div 
      className="absolute z-10 transition-all duration-100 ease-out"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    >
      <div className="bg-white shadow-md rounded-md px-3 py-2 flex justify-between items-center w-[89px] relative">
        {/* Triangle pointer at bottom */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
        
        <div className="font-['Poppins:Regular',_sans-serif] font-normal text-[#979699] text-[13px]">
          9:51AM
        </div>
        <div className="font-['Poppins:Medium',_sans-serif] font-medium text-neutral-700 text-[13px]">
          75%
        </div>
      </div>
    </div>
  );
}

export default function MemoryCard() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 308, y: 150 });
  const [breathingScale, setBreathingScale] = useState(1.0);
  
  const animationRef = useRef<number | null>(null);
  
  // References to track state
  const prevPositionRef = useRef({ x: 308, y: 150 });

  // Points along the curve to help calculate tooltip position
  const curvePoints = [
    { x: 12, y: 25 },   // Start point
    { x: 63, y: 33 },
    { x: 146, y: 21 },
    { x: 224, y: 28 },
    { x: 322, y: 10 },  // Top/peak point
    { x: 419, y: 31 },
    { x: 531, y: 10 }   // End point
  ];

  // Simple breathing animation
  useEffect(() => {
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      // Simple sine wave breathing with reduced scale range
      const scale = 1.0 + 0.02 * Math.sin(elapsedTime / 1000);
      setBreathingScale(scale);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Find the nearest point on the curve for a given x position
  const findCurveYAtPosition = (x: number) => {
    let prevPoint = curvePoints[0];
    let nextPoint = curvePoints[curvePoints.length - 1];
    
    for (let i = 0; i < curvePoints.length - 1; i++) {
      if (x >= curvePoints[i].x && x <= curvePoints[i+1].x) {
        prevPoint = curvePoints[i];
        nextPoint = curvePoints[i+1];
        break;
      }
    }
    
    const ratio = (x - prevPoint.x) / (nextPoint.x - prevPoint.x);
    return prevPoint.y + ratio * (nextPoint.y - prevPoint.y);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Calculate position relative to the curve container
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    if (x >= 0 && x <= rect.width) {
      // Convert to SVG coordinate space for the curve
      const svgX = (x * 543) / 519;
      
      // Get Y position on the curve
      const curveY = findCurveYAtPosition(svgX);
      
      // Convert back to page coordinates
      const containerTop = 149;
      const curveYInPage = containerTop + ((curveY * 24) / 48);
      
      // Smooth transition between previous and new positions
      const smoothX = prevPositionRef.current.x * 0.7 + (x - 45) * 0.3;
      const smoothY = prevPositionRef.current.y * 0.7 + (curveYInPage - 50) * 0.3; // Adjusted Y position for the new tooltip
      
      setTooltipVisible(true);
      setTooltipPosition({ 
        x: Math.max(45, Math.min(smoothX, 480)),
        y: smoothY
      });
      
      prevPositionRef.current = { x: smoothX, y: smoothY };
    } else {
      setTooltipVisible(false);
    }
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  // Get the transform style for the breathing animation
  const getTransformStyle = () => {
    return { 
      transformOrigin: 'center', 
      transform: `scale(${breathingScale})` 
    };
  };

  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full"
      data-name="Memory Card"
    >
      <div className="absolute css-shvt1q font-['Quicksand:Bold',_sans-serif] font-bold leading-[0] left-[21px] text-[#323b4b] text-[20px] text-left text-nowrap top-[38px]">
        <p className="block leading-[normal] whitespace-pre text-[20px]">MEMORY</p>
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
        <p className="block leading-[normal] text-[10px]">5.44 GB</p>
      </div>
      <div className="absolute css-ab7z1s font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[480px] not-italic text-[#384052] text-[10px] text-left top-[68px] w-[62px]">
        <p className="block leading-[normal] text-[10px]">2.4 GB</p>
      </div>
      <div className="absolute css-ab7z1s font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[23px] not-italic text-[#384052] text-[10px] text-left text-nowrap top-[105px]">
        <p className="block leading-[normal] whitespace-pre">Pressure</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[39px] not-italic text-[#999999] text-[6px] text-right top-[123px] translate-x-[-100%] w-5">
        <p className="block leading-[normal] text-[6px]">100%</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[39px] not-italic text-[#999999] text-[6px] text-right top-[228px] translate-x-[-100%] w-[11px]">
        <p className="block leading-[normal] text-[6px]">0%</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[566px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">10:00AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[518px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">9:59AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[469px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">9:58AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[420px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">9:55AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[368px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">9:50AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[321px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">9:35AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[272px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">9:20AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[223px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">9:05AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[173px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">8:50AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[126px] not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">8:35AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-20 not-italic text-[#999999] text-[6px] text-right top-[237px] translate-x-[-100%] w-[33px]">
        <p className="block leading-[normal] text-[6px]">8:20AM</p>
      </div>
      <div className="absolute css-997ssv font-['Inter:Bold',_sans-serif] font-bold h-[9px] leading-[0] left-[39px] not-italic text-[#999999] text-[6px] text-right top-[177px] translate-x-[-100%] w-4">
        <p className="block leading-[normal] text-[6px]">50%</p>
      </div>
      <Frame1321314088 />
      <EventHeader />
      <div 
        className="absolute h-6 left-12 top-[149px] w-[519px] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="absolute bottom-[-56.249%] left-[-2.216%] right-[-2.216%] top-[-39.583%] transition-transform duration-300 ease-in-out"
          style={getTransformStyle()}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 543 48"
          >
            <defs>
              {/* Enhanced glow filter */}
              <filter id="enhancedGlow" x="-10%" y="-40%" width="120%" height="180%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feFlood floodColor="#F9CE84" floodOpacity="0.4" result="glowColor">
                  <animate 
                    attributeName="flood-opacity" 
                    values="0.3;0.5;0.3" 
                    dur="3s" 
                    repeatCount="indefinite" 
                  />
                </feFlood>
                <feComposite in="glowColor" in2="blur" operator="in" result="softGlow" />
                <feMerge>
                  <feMergeNode in="softGlow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Wider glow path with more subtle effect */}
            <path
              d={svgPaths.p43a44e0}
              stroke="#F9CE84"
              strokeLinecap="round"
              strokeWidth="4"
              opacity="0.3"
              filter="url(#enhancedGlow)"
            />
            
            {/* Main path */}
            <path
              d={svgPaths.p43a44e0}
              stroke="#F9CE84"
              strokeLinecap="round"
              strokeWidth="3"
              className="animate-pulse-glow"
            />
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
      <CustomTooltip visible={tooltipVisible} position={tooltipPosition} />
    </div>
  );
}