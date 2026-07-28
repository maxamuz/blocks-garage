<?php
// This file is generated. Do not modify it manually.
return array(
	'block-forms' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-forms',
		'version' => '0.1.0',
		'title' => 'Block Forms',
		'category' => 'widgets',
		'icon' => 'forms',
		'description' => 'Форма записи на диагностику с виджетами рейтинга и карты.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'statementText' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.intro-statement p',
				'default' => 'Диагностика авто в автосервисе «Гараж САО»: <b>комплексная и поузловая</b> — точно определим неисправности и стоимость ремонта.'
			),
			'ratingPlatform' => array(
				'type' => 'string',
				'default' => 'Яндекс Карты'
			),
			'ratingScore' => array(
				'type' => 'string',
				'default' => '4,9'
			),
			'ratingStars' => array(
				'type' => 'string',
				'default' => '★★★★★'
			),
			'ratingCount' => array(
				'type' => 'string',
				'default' => 'Более 900 оценок клиентов'
			),
			'mapLocationText' => array(
				'type' => 'string',
				'default' => 'Гараж САО, СВАО Москвы'
			),
			'mapLinkText' => array(
				'type' => 'string',
				'default' => 'Открыть карту →'
			),
			'mapLinkHref' => array(
				'type' => 'string',
				'default' => '#'
			),
			'discountBadge' => array(
				'type' => 'string',
				'default' => 'Скидка 5% при записи на сайте'
			),
			'formTitle' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.form-card h3',
				'default' => 'Записаться на диагностику'
			),
			'formSubtitle' => array(
				'type' => 'string',
				'default' => 'Оставьте заявку — перезвоним и подберём удобное время в течение 10 минут.'
			),
			'formShortcode' => array(
				'type' => 'string',
				'default' => '[contact-form-7 id="6155b65" title="Главная форма"]'
			),
			'formNamePlaceholder' => array(
				'type' => 'string',
				'default' => 'Ваше имя'
			),
			'formTelPlaceholder' => array(
				'type' => 'string',
				'default' => '+7 (999) 999-99-99'
			),
			'formButtonText' => array(
				'type' => 'string',
				'default' => 'Отправить'
			),
			'consentText' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.form-card .consent',
				'default' => 'Нажимая «Отправить», вы соглашаетесь на обработку персональных данных согласно <a href="#">политике конфиденциальности</a>.'
			)
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-hero',
		'version' => '0.1.0',
		'title' => 'Block Hero',
		'category' => 'widgets',
		'icon' => 'car',
		'description' => 'Hero-блок с акционным предложением автосервиса.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Услуги автосервиса в САО Москвы'
			),
			'heading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h1',
				'default' => 'Комплексная диагностика автомобиля <span class="accent">бесплатно</span> при ремонте в автосервисе'
			),
			'lead' => array(
				'type' => 'string',
				'default' => 'Диагностика дилерского уровня — точное определение неисправности и честный расчёт стоимости ремонта, без «развода» на лишние работы.'
			),
			'oldPrice' => array(
				'type' => 'string',
				'default' => '5950'
			),
			'priceValue' => array(
				'type' => 'string',
				'default' => '0₽'
			),
			'priceSubtext' => array(
				'type' => 'string',
				'default' => 'при ремонте у нас'
			),
			'offerTitle' => array(
				'type' => 'string',
				'default' => 'Диагностика'
			),
			'offerText' => array(
				'type' => 'string',
				'default' => 'дилерского уровня — бесплатно, если выполняете ремонт у нас в автосервисе. Сначала честно скажем, что не так, и только потом чиним.'
			),
			'cta1Text' => array(
				'type' => 'string',
				'default' => 'Записаться на диагностику'
			),
			'cta1Href' => array(
				'type' => 'string',
				'default' => '#lead'
			),
			'cta2Text' => array(
				'type' => 'string',
				'default' => 'Смотреть цены'
			),
			'cta2Href' => array(
				'type' => 'string',
				'default' => '#price'
			),
			'note' => array(
				'type' => 'string',
				'default' => 'Принимаем автомобили любых марок, годов выпуска и с любым пробегом — состояние машины не влияет на качество диагностики.'
			),
			'imageSrc' => array(
				'type' => 'string',
				'default' => 'diag-hero.jpg'
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => 'Диагностика автомобиля в автосервисе Гараж САО'
			),
			'badgeMain' => array(
				'type' => 'string',
				'default' => 'Диагностика'
			),
			'badgeSub' => array(
				'type' => 'string',
				'default' => 'дилерского уровня'
			)
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-price-top' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-price-top',
		'version' => '0.1.0',
		'title' => 'Block Price Top',
		'category' => 'widgets',
		'icon' => 'table-col-after',
		'description' => 'Таблица с ценами на услуги автосервиса (акционный блок сверху).',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'col1Header' => array(
				'type' => 'string',
				'default' => 'Наименование услуги'
			),
			'col2Header' => array(
				'type' => 'string',
				'default' => 'Стоимость'
			),
			'col3Header' => array(
				'type' => 'string',
				'default' => 'Описание'
			),
			'service1Name' => array(
				'type' => 'string',
				'default' => 'Общая диагностика'
			),
			'service1OldPrice' => array(
				'type' => 'string',
				'default' => '3700 ₽'
			),
			'service1NewPrice' => array(
				'type' => 'string',
				'default' => '0 ₽'
			),
			'service1Description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.price-table tbody tr.promo:nth-child(1) .description-price',
				'default' => '<ul><li>Визуальный осмотр кузова и салона.</li><li>Проверка состояния шин и дисков.</li><li>Проверка наружного освещения.</li><li>Проверка уровня и состояния технических жидкостей.</li><li>Состояние свечей зажигания.</li><li>Приводные ремни, ролики.</li><li>Опоры ДВС, КПП, АКПП.</li><li>Состояние радиаторов (на предмет повреждений и загрязнений).</li><li>Проверка рулевого управления (на наличие люфтов и течей).</li><li>Тормозная система: износ дисков и колодок.</li><li>Проверка подвески: состояние сайлент‑блоков и шарнирных элементов.</li><li>Выпускной тракт: проверка на герметичность, состояние подвесов.</li></ul>'
			),
			'service2Name' => array(
				'type' => 'string',
				'default' => 'Компьютерная диагностика'
			),
			'service2OldPrice' => array(
				'type' => 'string',
				'default' => '2250 ₽'
			),
			'service2NewPrice' => array(
				'type' => 'string',
				'default' => '0 ₽'
			),
			'service2Description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.price-table tbody tr.promo:nth-child(2) .description-price',
				'default' => 'Опрос систем на предмет наличия ошибок, расшифровка ошибок, сверка параметров в случае необходимости.'
			)
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
