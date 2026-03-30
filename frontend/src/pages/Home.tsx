import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInput } from "@/components/ui/sidebar"
import { blocks } from "@/data/blocks"
import { useEffect, useRef, useState } from "react"
import { FootprintsIcon, LogOutIcon } from 'lucide-react'
import { Layout, Type, Heading, AlignLeft } from "lucide-react"

const Home = () => {
  const [search, setSearch] = useState("")

  const filtered = blocks.filter(block =>
    block.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <SidebarInput
            placeholder="Search blocks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SidebarHeader>

        <SidebarContent className="overflow-visible">
          {filtered.map(block => (
            <BlockCard key={block.id} block={block} />
          ))}
        </SidebarContent>

        <SidebarFooter>
          <Button>
            <LogOutIcon />Logout
          </Button>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
}




const iconMap: Record<string, React.ReactNode> = {
  "header-one": <Heading size={16} />,
  "header-two": <Heading size={16} />,
  hero: <Layout size={16} />,
  footer: <FootprintsIcon size={16} />,
  "header-three": <Layout size={16} />,
  "header-four": <AlignLeft size={16} />,
  paragraph: <AlignLeft size={16} />,
  heading: <Type size={16} />,
}

// function BlockCard({ block }: { block: { id: string, label: string, category: string, component: any } }) {
//   const [hovered, setHovered] = useState(false)
//   const Preview = block.component

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* The card itself */}
//       <div
//         className="
//           flex items-center gap-2 px-3 py-2 rounded-md border border-border
//           bg-background cursor-grab text-sm font-medium text-foreground
//           transition-all duration-200 ease-in-out select-none
//           hover:scale-[1.03] hover:shadow-md hover:border-primary/40
//         "
//       >
//         <span className="text-muted-foreground">
//           {iconMap[block.id] ?? <Layout size={16} />}
//         </span>
//         {block.label}
//       </div>

//       {/* Hover preview popup */}
//       {hovered && (
//         <div
//           className="
//             absolute left-full top-0 ml-3 z-50
//             w-[480px] rounded-lg border border-border
//             bg-background shadow-2xl overflow-hidden
//             pointer-events-none
//             animate-in fade-in-0 zoom-in-95 duration-150
//           "
//         >
//           {/* Preview label */}
//           <div className="px-3 py-1.5 text-xs text-muted-foreground border-b border-border bg-muted/40">
//             Preview — {block.label}
//           </div>

//           {/* Scaled down component preview */}
//         <div style={{ height: "60px", width: "480px", overflow: "hidden" }}>
//             <div className="origin-top-left scale-[0.75] w-[640px] ">
//               <Preview />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


function BlockCard({ block }: { block: { id: string, label: string, category: string, component: any } }) {
  const [hovered, setHovered] = useState(false)
  const [previewHeight, setPreviewHeight] = useState(0)

  const previewRef = useRef<HTMLDivElement>(null)
  const Preview = block.component

  useEffect(() => {
    if (hovered && previewRef.current) {
      const height = previewRef.current.getBoundingClientRect().height
      // const width = previewRef.current.getBoundingClientRect().width

      setPreviewHeight(height * 1) // scale factor

    }
  }, [hovered])

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* card */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-background cursor-grab text-sm font-medium text-foreground transition-all duration-200 ease-in-out select-none hover:scale-[1.03] hover:shadow-md hover:border-primary/40">
        <span className="text-muted-foreground">
          {iconMap[block.id] ?? <Layout size={16} />}
        </span>
        {block.label}
      </div>

      {hovered && (
        <div className="absolute left-full top-0 ml-3 z-50 w-[480px] rounded-lg border border-border bg-background shadow-2xl overflow-hidden pointer-events-none animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-xs text-muted-foreground border-b border-border bg-muted/40">
            Preview — {block.label}
          </div>

          {/* wrapper clips to exact scaled height */}
          <div style={{ height: previewHeight || "auto", overflow: "hidden" }}>
            <div
              ref={previewRef}
              style={{
                transform: "scale(0.75)",
                transformOrigin: "top left",
                width: "640px"
              }}
            >
              <Preview />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Home