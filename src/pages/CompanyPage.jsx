import React from 'react';
import Table from 'react-bootstrap/Table';
import imageOne from '../assets/img/sertificat2023.jpeg';
import imageTwo from '../assets/img/doosancompany1.jpeg';
import imageThree from '../assets/img/doosancompany2.jpeg';

export default function CompanyPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container__my">
            <h2 className="content__title">О компании</h2>
            <h2 className="content__title">«Специализированный Автомобильный Батальон»</h2>
            <div className="company__content">
                <div className="company__teazer">
                    <div className="company__teazer__text">
                        <h4 className="teazer__title">
                            ООО СпецАвтоБат
                        </h4>
                        <span className="accent-bar"></span>
                        <p> Мы, официальный дилер и сервис-дилер ООО "Трансмехсервис" дистрибъютера DEVELON
                            (HD HYUNDAI INFRACORE) на территории Российской Федерации. На правах дилера мы осуществляем поставку
                            техники DEVELON снабжением запасными частями, обеспечиваем обслуживание и ремонт техники и узлов.
                            Вы всегда можете быть уверены в качестве поставляемой техники и услуг.
                            Мы предлагаем оборудование и запасные части мирового уровня предприятиям добывающей, коммунальной,
                            дорожно-строительной и сельскохозяйственной отраслей.
                        </p>

                    </div>
                    <div className="company__teazer__img">
                        <img src={imageOne} alt="Картинка" />
                    </div>
                    <div className="company__teazer__img">
                        <img src={imageTwo} alt="Картинка" />
                    </div>
                    <div className="company__teazer__text company__teazer_text_reverse">
                        <h4 className="teazer__title">
                            О нас
                        </h4>
                        <span className="accent-bar"></span>
                        <p>Предприятие расположено в Бодайбинском
                            районе - центре золотодобывающей промышленности Иркутской области, где ежегодно добывается
                            более 20 тонн золота.
                            Наше предприятие прилагает все усилия, чтобы гарантировать вам лучшие цены на лучшие товары.
                            Мы постоянно расширяем ассортимент, чтобы максимально удовлетворить все ваши потребности в спецтехнике
                            и запчастях, а также расширяем ассортимент предоставляемых услуг. «СПЕЦАВТОБАТ» заботится о своей
                            репутации и интересах клиентов, именно поэтому мы предлагаем только высококачественную технику
                            производителей с мировым именем.</p>
                    </div>
                    <div className="company__teazer__text">
                        <h4 className="teazer__title">
                            Команда профессионалов
                        </h4>
                        <span className="accent-bar"></span>
                        <p> Приоритеты работы компании — профессионализм, надежность, персональный подход к каждому
                            клиенту и при этом самые выгодные для клиента условия делового партнерства: прямые поставки
                            и цены завода-изготовителя; полная предпродажная подготовка; минимальные сроки поставки,
                            гарантийные обязательства, квалифицированный, аттестованный производителем сервис.
                        </p>
                    </div>
                    <div className="company__teazer__img">
                        <img src={imageThree} alt="Картинка" />
                    </div>

                </div>
                <div className='company__recvizit'>
                    <h4 className="teazer__title">
                        Реквизиты
                    </h4>
                    <span className="accent-bar"></span>
                    <Table striped hover size="sm">
                        <tbody>
                            <tr>
                                <th>Юридический адрес</th>
                                <td class="text-end">666904,  Иркутская обл., г. Бодайбо, ул. Карла Либкнехта, д. 63-39</td>
                            </tr>
                            <tr>
                                <th>Фактический/почтовый адрес</th>
                                <td class="text-end">666902, Иркутская обл., г. Бодайбо, ул. Артема Сергеева, д. 9А.</td>
                            </tr>
                            <tr>
                                <th>Инн</th>
                                <td class="text-end">3802999939</td>
                            </tr>
                            <tr>
                                <th>ОГРН</th>
                                <td class="text-end">1133850022129</td>
                            </tr>
                            <tr>
                                <th>ОКАТО</th>
                                <td class="text-end">25410000000</td>
                            </tr>
                            <tr>
                                <th>ОКПО</th>
                                <td class="text-end">16603060</td>
                            </tr>
                            <tr>
                                <th>Р/счет</th>
                                <td class="text-end">40702810218350000000</td>
                            </tr>
                            <tr>
                                <th>К/счет</th>
                                <td class="text-end">30101810900000000000</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

    )
}