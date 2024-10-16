import React from 'react';
import mechanism_icon from '../../assets/img/mechanism_icon.svg';
import quality_icon from '../../assets/img/quality_icon.svg';
import profi_icon from '../../assets/img/profi_icon.svg';
import delivery_icon from '../../assets/img/delivery_icon.svg';
import service_icon from '../../assets/img/service_icon.svg';
import garant_icon from '../../assets/img/garant_icon.svg';
import care_icon from '../../assets/img/care_icon.svg';
import AdvantageCard from '../../Components/AdvantageCard';

const data = [
    {
        id: 1,
        icon: mechanism_icon,
        title: "Производительность",
        textcard: "Оригинальные детали DEVELON, оптимизированные для оборудования DEVELON, повышают производительность и снижают затраты за счет экономии топлива.",
        popup: [{
            popupid: 1,
            popuptitle: "Использование оригинальных запчастей DEVELON определенно более рентабельно, чем использование неоригинальных запчастей.",
            popuptext: "Мы все знаем, что внешность может быть обманчивой. Хотя они могут выглядеть одинаково, неоригинальные детали могут существенно повлиять на производительность оборудования. Например, использование неоригинальных фильтров/смазочных материалов может привести к перегрузке оборудования, что может привести к увеличению затрат в будущем, а не к снижению затрат."
        },
        {
            popupid: 2,
            popuptitle: "Покупка запчастей у неофициальных дилеров снижает оптимальную работу оборудования.",
            popuptext: "Покупка оригинальных запчастей DEVELON у сторонних неофициальных дилеров также может привести к неожиданному повреждению оборудования DEVELON. В соответствии с техническим развитием конструкции оборудования часто модернизируются, а детали могут подвергаться изменениям. Неофициальные дилеры могут рекомендовать покупателю устаревшие детали без каких-либо плохих намерений или неточной информации. Такие детали могут вызвать неожиданные проблемы на объекте клиента. Детали могут прийти в полную негодность. Только официальные дилеры могут рекомендовать и предлагат оригинальные детали DEVELON, оптимизированные для конкретного оборудования клиента и обеспечивающие максимальную производительность и надежность.",
        }
        ]
    },
    {
        id: 2,
        icon: quality_icon,
        title: "Качество",
        textcard: "Качество оригинальных запчастей DEVELON превосходит исключительное. Они гарантируют, что оборудование DEVELON работает максимально эффективно благодаря стабильной и постоянной работе.",
        popup: [{
            popupid: 3,
            popuptitle: "Наш Центр оценки надежности является крупнейшим институтом оценки характеристик тяжелого оборудования и запчастей в Азии.",
            popuptext: "Центр оценки надежности проводит строжайшие эксплуатационные испытания каждой детали, поставляемой HD HYUNDAI INFRACORE, в идеально смоделированных условиях. Центр является ядром технического развития и обеспечения качества компании. Все оригинальные детали DEVELON, прошедшие испытания, были одобрены известными лабораториями Европы и США после успешного прохождения строгих испытаний."
        },
        {
            popupid: 4,
            popuptitle: "HD HYUNDAI INFRACORE разрабатывает все свои ключевые детали с учетом обеспечения качества.",
            popuptext: "HD HYUNDAI INFRACORE самостоятельно производит все ключевые детали, чтобы обеспечить работу оборудования в наилучшем состоянии. Детали используются некоторыми конкурентами компании (20 компаний), что свидетельствует о высокой конкурентоспособности наших запчастей.",
        },
        {
            popupid: 5,
            popuptitle: "Детали для спецтехники различаются по качеству в зависимости от условий хранения и транспортировки HD HYUNDAI INFRACORE все это делает сам.",
            popuptext: "Продавцы неоригинальных запчастей накапливают и доставляют детали дешевыми и рискованными способами, чтобы минимизировать свои расходы. Оригинальные детали DEVELON, поставляемые по неофициальным каналам, часто имеют невидимые повреждения или дефекты из-за отсутствия контроля загрязнения или неправильных методов хранения. Их использование может оказать существенное негативное влияние на производительность оборудования и эксплуатационные расходы клиента.",
        },
        {
            popupid: 6,
            popuptitle: "Оригинальные детали DEVELON регулярно проверяются на предмет их коммерческой ценности, чтобы их можно было доставлять клиентам в наилучшем состоянии.",
            popuptext: "HD HYUNDAI INFRACORE раз в полгода проверяет наличие запасных частей. При обнаружении коррозии или любого другого повреждения все соответствующие детали немедленно уничтожаются. HD HYUNDAI INFRACORE гарантирует, что все детали покинут территорию компании в наилучшем состоянии.",
        }]
    },
    {
        id: 3,
        icon: care_icon,
        title: "Техническое обслуживание DEVELONCARE",
        textcard: "Оригинальные детали DEVELON сопровождаются систематическим «Полным пакетом услуг», тщательно разработанным в соответствии с философией компании «Доверие, приверженность и долгосрочное партнерство».",
        popup: [{
            popupid: 15,
            popuptext: "Программа технического обслуживания DEVELONCARE предлагает клиенту полный пакет услуг, основанный на философии компании «Приверженность, доверие и долгосрочное партнерство». Покупатели оригинальных запчастей DEVELON имеют право на различные преимущества, доступные участникам DEVELONCARE Maintenance.",
        },
        {
            popupid: 16,
            popuptitle: "DEVELONCARE Maintenance — это программа регулярного технического обслуживания, предлагаемая официальными дилерами.",
            popuptext: "Официальные дилеры регулярно посещают бизнес-сайты всех участников, чтобы предложить им качественную профилактическую диагностику и проверку работоспособности оборудования с использованием современного диагностического оборудования компании. Участники также уведомляются о времени, когда им необходимо заменить детали.",
        }]
    },
    {
        id: 4,
        icon: profi_icon,
        title: "Профессионализм",
        textcard: "Оригинальные запчасти DEVELON поставляются исключительно через официальных дилеров DEVELON. Высококлассные специалисты, прошедшие обучение и сертификацию в Компании, консультируют клиентов по правильному использованию запчастей.",
        popup: [{
            popupid: 7,
            popuptext: "Компания предлагает своим дилерам обучение мирового уровня по запчастям DEVELON. Продавать детали разрешено только дилерам, прошедшим курс обучения в Академии компании. Они имеют право предлагать своим клиентам лучшие консультационные услуги по запчастям DEVELON.",
        },
        {
            popupid: 8,
            popuptitle: "Наши специалисты (дилеры) предлагают консультационные услуги с учетом потребностей клиентов.",
            popuptext: "Каждый объект отличается необходимостью инвентаризации необходимых деталей. Аналогичным образом, на каждом объекте имеется свой собственный список критически важных деталей, необходимых для обеспечения оптимальной производительности или наилучшего состояния оборудования. Непрофессионалы склонны рекомендовать покупать неоригинальные детали только потому, что они дешевы. Использование неоригинальных запчастей приводит к снижению производительности оборудования клиента и снижению прибыльности его/ее бизнеса. Наши специалисты рекомендуют наиболее подходящие типы оригинальных запчастей DEVELON для каждого предприятия, принимая во внимание климатические и топографические характеристики, а также другие факторы.",
        }]
    },
    {
        id: 5,
        icon: delivery_icon,
        title: "Доставка",
        textcard: "HD HYUNDAI INFRACORE гарантирует быструю и точную доставку оригинальных запчастей DEVELON по всему миру через свою глобальную сеть PDC (центра распределения запчастей).",
        popup: [{
            popupid: 9,
            popuptitle: "Глобальная сеть",
            popuptext: "Глобальная сеть GPDC (Глобального центра распределения запчастей) максимизирует скорость поставок, гарантируя, что каждый центр снабжен всеми критически важными деталями, необходимыми для предприятий в его регионе. Сеть также сводит к минимуму время и затраты, необходимые для доставки запчастей, поскольку PDC расположены близко к основным рынкам по всему миру. PDC DEVELON общаются с клиентами в их часовом поясе, информируя их о том, что они открыты для работы, и доставляют им детали в кратчайшие сроки.",
        },
        {
            popupid: 10,
            popuptitle: "Мобильные контейнеры",
            popuptext: "Для труднодоступных мест, таких как карьеры, мы предлагаем экспресс-услуги или услуги мобильных контейнеров, которые максимально быстро доставляют ключевые детали, складированные в мобильном контейнере, на удаленные объекты.",
        }]
    },
    {
        id: 6,
        icon: service_icon,
        title: "Сервис",
        textcard: "Запчасти и услуги всегда тесно связаны между собой. Наиболее эффективно и экономично использовать оригинальные детали DEVELON при системной поддержке компании через ее официально сертифицированные сервисные программы.",
        popup: [{
            popupid: 11,
            popuptitle: "Пользователи неоригинальных запчастей DEVELON склонны рассчитывать на любительские услуги только для того, чтобы вскоре столкнуться с серьезными проблемами качества.",
            popuptext: "Согласно опросу, в то время как пользователи оригинальных запчастей DEVELON обычно обращаются в официально назначенные сервисы DEVELON, те, кто зависит от неоригинальных запчастей, не могут полагаться на официальные сервисы компании, что заметно ослабляет их партнерство с HD HYUNDAI INFRACORE. Отсутствие опыта у неофициальных поставщиков услуг или предоставление недостоверной информации о запчастях DEVELON иногда приводит к проблемам с качеством. ",
        },
        {
            popupid: 12,
            popuptext: "Только официальные дилеры, которые знают вас лучше всего, могут предоставить вам лучшее обслуживание. HD HYUNDAI INFRACORE предоставляет клиентам высочайшее качество поддержки продукции благодаря своей передовой системе управления клиентами. С помощью своей официальной системы управления клиентами мы создаем базу данных клиентов. При общении с клиентами по поводу поставок запчастей или запросов на обслуживание один из наших представителей лично проверяет информацию о клиенте и обеспечивает лучшее обслуживание клиентов. Сервис, предоставляемый Компанией, стабилен, быстр и надежен. Продавцы неоригинальных запчастей, как правило, недостаточно велики, чтобы предложить своим клиентам адекватный сервис. Клиенты, работающие в суровых регионах, не могут рассчитывать на качественное обслуживание и стабильные поставки запчастей. Строительные площадки обычно требуют немедленного обслуживания тяжелой техники. Им также необходимы относительно долгосрочные отношения с поставщиками оборудования. Им необходимо поддерживать партнерские отношения с поставщиками и получать надежные детали и услуги от официальных дилеров."
        }]
    },
    {
        id: 7,
        icon: garant_icon,
        title: "Гарантия",
        textcard: "Оригинальные детали DEVELON постоянно проходят проверку качества, чтобы гарантировать их высочайшее качество. HD HYUNDAI INFRACORE предлагает гарантию на один год или 2000 часов на все оригинальные детали. Такая политика возможна только тогда, когда поставщик уверен в качестве своей продукции.",
        popup: [{
            popupid: 13,
            popuptext: "HD HYUNDAI INFRACORE постоянно проводит испытания качества своих деталей, чтобы убедиться, что они являются лучшими в мире. HD HYUNDAI INFRACORE предлагает бесплатную гарантию на свои детали сроком на один год или 2000 часов, в зависимости от того, что наступит раньше, поскольку компания настолько уверена в качестве своих деталей.",
        },
        {
            popupid: 14,
            popuptitle: "HD HYUNDAI INFRACORE предоставляет гарантию на оригинальные детали.",
            popuptext: "Что касается ключевых деталей, HD HYUNDAI INFRACORE заменит их новыми, если в деталях возникнет неисправность в любом виде, форме или форме в течение одного года или 2000 часов использования. Ни один поставщик неоригинальных запчастей не сможет предложить такую ​​выдающуюся гарантию качества. Ее клиенты вряд ли могут рассчитывать на гарантию качества запчастей компании после оплаты.",
        }]
    }
]

export default function IndexParts() {
    return (
        <div className="filter_page">
            <div className="container__partspage">
                <h2 className="content__title">Преимущества оригинальных деталей DEVELON (Doosan)</h2>
                <p className='text'>Учитывая преимущества использования оригинальных деталей DEVELON и потенциальные риски
                    использования неоригинальных деталей, использование оригинальных запчастей DEVELON всегда является
                    правильным выбором.</p>
                <div className="advantage__box">
                    {data.map((obj) => <AdvantageCard key={obj.id} {...obj} />)}
                </div>
            </div>
        </div>
    )
}
