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
			'yandexWidgetIframeSrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'yandexWidgetLinkHref' => array(
				'type' => 'string',
				'default' => ''
			),
			'yandexWidgetLinkText' => array(
				'type' => 'string',
				'default' => ''
			),
			'yandexWidgetHeight' => array(
				'type' => 'number',
				'default' => 800
			),
			'mapLocationText' => array(
				'type' => 'string',
				'default' => 'Гараж САО, СВАО Москвы'
			),
			'mapImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'mapImageAlt' => array(
				'type' => 'string',
				'default' => 'Карта'
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
	'block-honest' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-honest',
		'version' => '0.1.0',
		'title' => 'Block Honest',
		'category' => 'widgets',
		'icon' => 'shield',
		'description' => 'Блок «Наш подход» с карточками (репитер).',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Наш подход'
			),
			'heading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.section-head h2',
				'default' => 'Работаем честно: сначала диагностика и смета — потом ремонт'
			),
			'lede' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.lede',
				'default' => 'Такой подход позволяет выявить скрытые проблемы и спланировать ремонт без спешки и лишних трат. Принимаем авто любых годов выпуска и с любым пробегом — состояние не влияет на качество диагностики.'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Сначала диагностика и смета',
						'text' => 'Вы точно знаете, что не так с автомобилем и сколько будет стоить ремонт, ещё до начала работ.'
					),
					array(
						'title' => 'Диагностика бесплатно при ремонте',
						'text' => 'Если решите чинить автомобиль у нас — стоимость диагностики не входит в счёт.'
					),
					array(
						'title' => 'Никаких лишних работ',
						'text' => 'Предлагаем ремонт только того, что реально требует внимания — без навязанных услуг.'
					),
					array(
						'title' => 'Эвакуатор',
						'text' => 'В случае необходимости, организуем доставку вашего автомобиля к нам в сервис.'
					),
					array(
						'title' => 'Ценим время',
						'text' => 'знаем как важно вовремя получить автомобиль в четко обозначенный срок.'
					)
				)
			)
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-lead-form' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-lead-form',
		'version' => '0.1.0',
		'title' => 'Block Lead Form',
		'category' => 'widgets',
		'icon' => 'forms',
		'description' => 'Секция заявки на диагностику с левой текстовой частью и формой (или CF7-шорткодом).',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Оставить заявку'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Запишитесь на диагностику'
			),
			'leadText' => array(
				'type' => 'string',
				'default' => 'Расскажите, что беспокоит в автомобиле — подберём вид диагностики, назовём точную цену и запишем на удобное время.'
			),
			'points' => array(
				'type' => 'array',
				'default' => array(
					'Ответим и перезвоним в течение 10 минут',
					'Назовём точную стоимость до приезда',
					'Диагностика бесплатно при ремонте у нас'
				)
			),
			'useCF7' => array(
				'type' => 'boolean',
				'default' => false
			),
			'formShortcode' => array(
				'type' => 'string',
				'default' => ''
			),
			'formTitle' => array(
				'type' => 'string',
				'default' => 'Заявка на диагностику'
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
				'default' => 'Отправить заявку'
			),
			'consentText' => array(
				'type' => 'string',
				'default' => 'Нажимая «Отправить заявку», вы соглашаетесь на обработку персональных данных и принимаете условия политики конфиденциальности.'
			),
			'consentLinkText' => array(
				'type' => 'string',
				'default' => 'политики конфиденциальности'
			),
			'consentLinkHref' => array(
				'type' => 'string',
				'default' => '#'
			)
		)
	),
	'block-price' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-price',
		'version' => '0.1.0',
		'title' => 'Block Price',
		'category' => 'widgets',
		'icon' => 'money-alt',
		'description' => 'Секция стоимости диагностики с таблицей, боковой картинкой и примечаниями.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Стоимость'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Если выбираете только диагностику'
			),
			'col1Header' => array(
				'type' => 'string',
				'default' => 'Наименование услуги'
			),
			'col2Header' => array(
				'type' => 'string',
				'default' => 'Стоимость'
			),
			'rows' => array(
				'type' => 'array',
				'default' => array(
					array(
						'name' => 'Компьютерная диагностика авто',
						'promo' => true,
						'tag' => 'Акция',
						'oldPrice' => '2250 ₽',
						'newPrice' => '0 ₽',
						'price' => ''
					),
					array(
						'name' => 'Комплексная диагностика бензиновых и дизельных авто',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 1000 ₽'
					),
					array(
						'name' => 'Комплексная диагностика автомобиля иностранного производства',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 3500 ₽'
					),
					array(
						'name' => 'Комплексная диагностика авто отечественного производства',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 2000 ₽'
					),
					array(
						'name' => 'Компьютерная диагностика электроники',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 1000 ₽'
					),
					array(
						'name' => 'Диагностика трансмиссии (подвески и ходовой части авто)',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 700 ₽'
					),
					array(
						'name' => 'Компьютерная диагностика трансмиссии МКПП и АКПП',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 1000 ₽'
					),
					array(
						'name' => 'Диагностика наружного и внутреннего освещения ТС',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 500 ₽'
					),
					array(
						'name' => 'Диагностика транспортных средств при покупке или продаже',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 1000 ₽'
					),
					array(
						'name' => 'Диагностика ДВС',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 1000 ₽'
					),
					array(
						'name' => 'Диагностика пневмосистемы',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 1500 ₽'
					),
					array(
						'name' => 'Диагностика сход-развал',
						'promo' => false,
						'tag' => '',
						'oldPrice' => '',
						'newPrice' => '',
						'price' => 'от 1000 ₽'
					)
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'name' => array(
							'type' => 'string'
						),
						'promo' => array(
							'type' => 'boolean'
						),
						'tag' => array(
							'type' => 'string'
						),
						'oldPrice' => array(
							'type' => 'string'
						),
						'newPrice' => array(
							'type' => 'string'
						),
						'price' => array(
							'type' => 'string'
						)
					)
				)
			),
			'priceNote' => array(
				'type' => 'string',
				'default' => 'Итоговая стоимость зависит от марки автомобиля и объёма работ и согласовывается с мастером до начала диагностики.'
			),
			'imageSrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => 'Оборудование для диагностики автомобиля'
			),
			'masterNote' => array(
				'type' => 'string',
				'default' => 'Важно: точную цену диагностики мастер называет заранее — по телефону или в чате, до приезда в автосервис. Никаких сюрпризов в чеке.'
			)
		)
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
	),
	'block-process' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-process',
		'version' => '0.1.0',
		'title' => 'Block Process',
		'category' => 'widgets',
		'icon' => 'editor-ol',
		'description' => 'Блок «Как это устроено» с шагами процесса диагностики.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'imageSrc' => array(
				'type' => 'string',
				'default' => 'diag-process.jpg'
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => 'Компьютерная диагностика автомобиля'
			),
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Как это устроено'
			),
			'heading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.process-text h2',
				'default' => 'В автосервисе «Гараж САО» диагностика легковых автомобилей — это не «посмотреть и сказать», а системный процесс'
			),
			'step1Title' => array(
				'type' => 'string',
				'default' => 'Визуальный осмотр и фотофиксация'
			),
			'step2Title' => array(
				'type' => 'string',
				'default' => 'Компьютерная диагностика электронных систем'
			),
			'step3Title' => array(
				'type' => 'string',
				'default' => 'Поузловая проверка: подвеска, тормозная система, рулевое управление, трансмиссия и т. д.'
			),
			'step4Title' => array(
				'type' => 'string',
				'default' => 'Оценка степени износа деталей'
			),
			'step5Title' => array(
				'type' => 'string',
				'default' => 'Формирование полного отчёта и расчёт стоимости ремонта (если требуется).'
			)
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-reviews' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-reviews',
		'version' => '0.1.0',
		'title' => 'Block Reviews',
		'category' => 'widgets',
		'icon' => 'format-status',
		'description' => 'Блок с карточками рейтинга, карты и CTA.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'yandexWidgetIframeSrc' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.rating-card iframe',
				'attribute' => 'src',
				'default' => ''
			),
			'yandexWidgetLinkHref' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.rating-card a.yandex-widget-link',
				'attribute' => 'href',
				'default' => ''
			),
			'yandexWidgetLinkText' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.rating-card a.yandex-widget-link',
				'default' => ''
			),
			'yandexWidgetHeight' => array(
				'type' => 'number',
				'default' => 800
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
			'mapHeight' => array(
				'type' => 'number',
				'default' => 120
			),
			'mapImageUrl' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.map-card .map-visual img',
				'attribute' => 'src',
				'default' => ''
			),
			'mapImageAlt' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.map-card .map-visual img',
				'attribute' => 'alt',
				'default' => 'Карта'
			),
			'mapInfoSpan' => array(
				'type' => 'string',
				'default' => 'Гараж САО, СВАО Москвы'
			),
			'mapInfoHref' => array(
				'type' => 'string',
				'default' => '#'
			),
			'mapInfoText' => array(
				'type' => 'string',
				'default' => 'Открыть карту →'
			),
			'ctaHref' => array(
				'type' => 'string',
				'default' => '#lead'
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Записаться на диагностику →'
			)
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
