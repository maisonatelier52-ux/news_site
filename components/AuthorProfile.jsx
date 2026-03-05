import Image from 'next/image';
import Link from 'next/link';
import { FaRedditAlien } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { FaQuora  } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

import { slugify } from "../utils/slugify";   

export default function AuthorProfile({ author }) {
  if (!author) return null;

  return (
    <div className="mt-5">
      <div className="mt-6 flex justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          {/* Author Image */}
          <Image
            src={author.profileImage}
            alt={author.name || "Author profile picture"}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded-full"
            sizes="64px"
            loading="lazy"
          />
          <div>
            {/* Author Name – now uses imported slugify */}
            <Link
              href={`/authors/${slugify(author.name)}`}  // ← correct & clean
              title={author.name}
              className="font-semibold text-sm text-gray-900 hover:text-blue-600 hover:underline"
            >
              {author.name}
            </Link>

            {/* Author Role */}
            <p className="text-gray-800 text-xs">{author.jobtitle?.trim()}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>
          <div className="flex items-center gap-3">
            {/* Social Media Icons */}
            {author.social?.twitter && (
              <Link
 
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                title="Follow on Medium"
              >
                <SiMedium className="w-5 h-5" />
              </Link>
            )}
            {author.social?.instagram && (
              <Link
                href={author.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                title="Follow on Quora"
              >
                <FaQuora className="w-5 h-5" />
              </Link>
            )}
            {author.social?.reddit && (
              <Link
                href={author.social.reddit}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                title="Follow on Reddit"
              >
                <FaRedditAlien className="w-5 h-5" />
              </Link>
            )}
            {author.social?.substack && (
              <Link
                href={author.social.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                title="Follow on Substack"
              >
                <BsSubstack className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <p className="mt-4 text-sm text-gray-600">
        {author.bio}
      </p>
    </div>
  );
}