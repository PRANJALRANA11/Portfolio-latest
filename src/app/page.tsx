import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { Icons } from "@/components/icons";


const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();
  const latestPosts = posts
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 3);
    
  const featuredProject = DATA.projects.find((p) => p.title === "Cally");

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">TL;DR</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {featuredProject && (
        <section id="featured-project">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold text-blue-500">Featured Spotlight</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden flex flex-col md:flex-row">
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-2xl">{featuredProject.title}</h3>
                    <p className="text-muted-foreground">{featuredProject.description}</p>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {featuredProject.technologies.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-1 py-0 text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    {featuredProject.links?.map((link, idx) => (
                      <Link href={link.href} key={idx} target="_blank">
                        <Badge className="flex gap-2 px-2 py-1 text-[12px]">
                          {link.icon} {link.type}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
                {featuredProject.image && (
                  <div className="flex-1 bg-muted relative min-h-[200px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={featuredProject.image} alt={featuredProject.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </BlurFade>
          </div>
        </section>
      )}

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {DATA.openSource && (
        <section id="opensource">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
              <h2 className="text-xl font-bold">Open Source Contributions</h2>
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DATA.openSource.map((oss, id) => (
                <BlurFade key={oss.title} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
                  <Link href={oss.href} target="_blank" className="block border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Icons.github className="w-5 h-5" />
                      <h3 className="font-semibold">{oss.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{oss.description}</p>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {DATA.techStack ? (
        <section id="tech-stack">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Tech Stack</h2>
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(DATA.techStack).map(([category, skills], idx) => (
                <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + idx * 0.05}>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium capitalize text-muted-foreground">{category}</h3>
                    <div className="flex flex-wrap gap-1">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>



      <section id="latest-blogs">
        <div className="space-y-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest Writings
                </h2>
              </div>
            </div>
          </BlurFade>
          
          <div className="flex flex-col gap-4">
            {latestPosts.map((post, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 14 + id * 0.05} key={post.slug}>
                <Link
                  className="flex flex-col sm:flex-row justify-between border-b pb-4 pt-2 hover:bg-muted/50 p-2 rounded-lg transition-colors"
                  href={`/blog/${post.slug}`}
                >
                  <div className="flex flex-col max-w-[80%]">
                    <h3 className="font-medium text-lg">{post.metadata.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {post.metadata.summary}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap mt-2 sm:mt-0">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </Link>
              </BlurFade>
            ))}
          </div>
          
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex justify-center mt-6">
              <Link href="/blog">
                <Badge variant="outline" className="px-4 py-2 hover:bg-secondary transition-colors cursor-pointer text-sm">
                  Read all posts &rarr;
                </Badge>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I attended {DATA.hackathons.length}+ hackathons. People from
                  around the country would come together and build incredible
                  things in 2-3 days. It was eye-opening to see the endless
                  possibilities brought to life by a group of motivated and
                  passionate individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
