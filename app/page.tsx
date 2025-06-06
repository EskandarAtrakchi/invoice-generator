import Link from "next/link"
import InvoiceGenerator from "@/components/invoice-generator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="container mx-auto py-6 sm:py-10 px-4">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Invoice Generator</h1>
        <ThemeToggle />
      </div>
      <InvoiceGenerator />
      <footer className="mt-8 sm:mt-10 text-center text-muted-foreground text-sm pb-4">
        <p>
          © {new Date().getFullYear()}{" "}
          
            Eskandar Atrakchi. Use it as you want, if you like it, please consider giving a star :)
        </p>
      </footer>
    </main>
  )
}
