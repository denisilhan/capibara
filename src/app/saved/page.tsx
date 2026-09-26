import { SavedList } from "@/components/saved-list";
export const metadata = { title: "saved" };
export default function SavedPage() {
  return <><div className="page-heading"><div><h1>saved for later.</h1><p>kept in this browser, without an account. clearing browser data removes this list.</p></div></div><SavedList /></>;
}
