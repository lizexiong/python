"""
    ����ֻҪ��ϵ�ֵ���б�Ƕ��ȡֵ�����ȵ�һ��ѭ����Ȼ��˼·�Ǵӷֲ�ĵط���ʼ������
    ��threading������������ֵ䣬��������һ����ֵ�����ԣ����Ȱ�threadingֵ���ó�����Ȼ����һ��һ������
"""


config = {
        "load" : {
            "last_time":0,
            "interval":10,
            "plugin_name":"get_load_info",
            "threading":{
                "load1":[
                    {"operator":"gt", "formula":None,"val":"0.1"},
                    #{"operator":"lt", "fornula":None,"val":"5"}
                ],
                "load5":[
                    {"operator":"lt", "formula":None,"val":"0.1","complex":{"interval": 30, "times": 5,"has_times": 0, "relative_time": 0}}
                ]
            }
        },
}

#"complex":{"interval": 30, "times": 5,"has_times": 0, "relative_time": 0}
for i, j in config.items():
    for ii,jj in j['threading'].items():
        for iii in jj:
            result =  iii.get('complex')
            if result:
                for iiii,jjjj in result.items():
                    pass
                print result['times']