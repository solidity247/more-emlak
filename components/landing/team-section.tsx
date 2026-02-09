"use client";

import { useLocale } from "@/lib/locale-context";

const teamMembers = [
  {
    name: "Юлия",
    role: "Директор",
    photo:
      "https://static.tildacdn.com/tild3238-3763-4162-b330-653133303238/noroot.png",
  },
  {
    name: "Барборос Хамза",
    role: "Совладелец",
    photo:
      "https://static.tildacdn.com/tild3063-6665-4335-b434-393863616532/IMG_62656.jpg",
  },
  {
    name: "Шахин",
    role: "Совладелец",
    photo:
      "https://static.tildacdn.com/tild6162-3130-4363-a264-656161356161/IMG_62642.jpg",
  },
  {
    name: "Алсу",
    role: "Главный бухгалтер",
    photo:
      "https://static.tildacdn.com/tild6562-6632-4532-a136-356337333335/IMG_62720.jpg",
  },
  {
    name: "Святослав",
    role: "Руководитель отдела продаж",
    photo:
      "https://static.tildacdn.com/tild6562-6263-4361-a435-306339343264/noroot.png",
  },
  {
    name: "Айдар",
    role: "Менеджер по продажам",
    photo:
      "https://static.tildacdn.com/tild6535-3537-4539-a365-616631396665/IMG_72411.jpg",
  },
  {
    name: "Булат",
    role: "Менеджер по продажам",
    photo:
      "https://static.tildacdn.com/tild3465-3366-4434-a262-386464343365/IMG_72391.jpg",
  },
  {
    name: "Евгений",
    role: "Менеджер по продажам",
    photo:
      "https://static.tildacdn.com/tild3766-3766-4965-b161-323933336465/IMG_7242.jpg",
  },
  {
    name: "Первин",
    role: "Менеджер постпродажного сервиса",
    photo:
      "https://static.tildacdn.com/tild3934-3364-4261-a334-653563356535/IMG_65415.jpg",
  },
  {
    name: "Самет",
    role: "Оформитель",
    photo:
      "https://static.tildacdn.com/tild6136-3138-4861-b130-396662313337/IMG_6389.png",
  },
  {
    name: "Шафак",
    role: "Менеджер по объектам",
    photo:
      "https://static.tildacdn.com/tild3536-6361-4938-a366-303436383336/IMG_72140.jpg",
  },
  {
    name: "Екатерина",
    role: "Хранительница очага",
    photo:
      "https://static.tildacdn.com/tild6331-6137-4363-b563-313537313632/IMG_61403.jpg",
  },
];

export function TeamSection() {
  const { t } = useLocale();

  return (
    <section className="relative bg-background py-16 md:py-24">
      {/* Warm decorative accent */}
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          {t("team.title")}
        </h2>
        <img
          src="/separator-ltl.svg"
          alt=""
          className="mx-auto mb-12 h-10 w-auto"
        />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  className="aspect-square w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
