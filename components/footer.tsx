export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Alemu Tadesse Zeru. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
