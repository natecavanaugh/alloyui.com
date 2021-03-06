AUI().use('aui-scheduler', function(A) {

  var events = [
    {
      content: "Event1",
      endDate: new Date(2013, 1, 4, 5),
      startDate: new Date(2013, 1, 4, 1)
    }
  ];

  var eventRecorder = new A.SchedulerEventRecorder();
  var weekView = new A.SchedulerWeekView();

  new A.Scheduler({
    boundingBox: '#myScheduler',
    date: new Date(2013, 1, 4),
    eventRecorder: eventRecorder,
    items: events,
    render: true,
    views: [weekView]
  });

});